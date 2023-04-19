import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const Header: React.FC = () => {
  return (
    <StyledHeader>
      <div>
        <div>burger</div>
        <div>button</div>
      </div>
      <div>
        <div>Search</div>
      </div>
      <div>
        <div>User</div>
      </div>
    </StyledHeader>
  );
};
