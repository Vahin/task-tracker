from django.conf import settings
from django.db import models


class CreatedModel(models.Model):
    """
    Абстрактная модель с датой создания.
    """

    created = models.DateTimeField(
        auto_now_add=True,
        verbose_name='Дата создания',
    )

    class Meta:
        abstract = True
        ordering = ('-created',)


class TitlekDecriptiondModel(CreatedModel):
    """
    Абстрактная модель создания
    объекта. Содержит поля названия,
    описания.
    """

    title = models.CharField(
        max_length=255,
        verbose_name='Название',
        help_text='Придумай название!',
    )
    description = models.CharField(
        max_length=255,
        verbose_name='Описание',
        help_text='Придумай описание!',
    )

    class Meta:
        abstract = True
        ordering = ('title', '-created',)

    def __str__(self):
        """
        Возвращаем читаемое описание модели.
        """
        return (
            (
                'Объект: '
                + self.title
                + ' с описанием: '
                + self.description[:settings.ADMIN_TEXT_LENGHT]
                + '...'
            )
            if len(self.description) >= settings.ADMIN_TEXT_LENGHT
            else (
                'Объект: ' + self.title + ' с описанием: ' + self.description
            )
        )
