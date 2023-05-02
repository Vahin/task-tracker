from django.conf import settings
from django.db import models
from django.contrib.auth import get_user_model

from core.models import CreatedModel, TitlekDecriptiondModel


User = get_user_model()


class Project(TitlekDecriptiondModel):
    """Модель для проекта."""

    status = models.CharField(
        max_length=20,
        choices=settings.PROJECT_STATUS_CHOICES,
        default='active',
    )


class Task(TitlekDecriptiondModel):
    """Модель для задачи."""

    status = models.CharField(
        max_length=20,
        choices=settings.TASK_STATUS_CHOICES,
        default='not_completed',
        verbose_name='Статус задачи',
        help_text='Выбери статус задачи',
    )
    deadline_date = models.DateTimeField(
        blank=True,
        null=True,
        verbose_name='Дедлайн',
        help_text='Выбери дату дедлайна',
    )
    project = models.ForeignKey(
        Project,
        on_delete=models.CASCADE,
        verbose_name='Задача в проекте',
        blank=True,
        related_name='task_in_project',
        help_text='Выбери проект для задачи',
    )


class Comment(CreatedModel):
    """
    Модель комментария к задаче.
    """

    author = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        verbose_name='Автор комментария',
        related_name='comments_author'
    )
    text = models.TextField()
    task = models.ForeignKey(
        Task,
        on_delete=models.CASCADE,
        verbose_name='Комментарий к задаче',
        related_name='comments_to_task',
    )

    def __str__(self):
        return (
            self.text[:settings.ADMIN_TEXT_LENGHT] + '...'
            if len(self.text) > settings.ADMIN_TEXT_LENGHT
            else self.text
        )


class Follow(models.Model):
    """
    Модель для добавления
    задачи в избранное.
    """

    user = models.ForeignKey(
        User,
        verbose_name='Пользователь',
        related_name='follower',
        on_delete=models.CASCADE,
    )
    task = models.ForeignKey(
        Task,
        verbose_name='Задача в подписке',
        related_name='following_task',
        on_delete=models.CASCADE,
    )

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=[
                    'user',
                    'task',
                ],
                name='unique_follow',
            )
        ]
        verbose_name = 'Избранное'
        verbose_name_plural = 'Избранные'

    def __str__(self):
        """
        Возвращаем читаемую связку
        избранных задач.
        """
        return (
            f'{self.task} в избранном у {self.user}'
        )
