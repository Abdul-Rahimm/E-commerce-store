import styled from "styled-components";
import Center from "./Center";
import Button from "./Button";

const Bg = styled.div`
  background-color: #222;
  color: #fff;
  padding: 50px 0;
`;

const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: 2rem;
`;

const Desc = styled.p`
  color: #aaa;
  font-size: 0.8rem;
`;

const Column = styled.div`
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 40px;
  img {
    max-width: 100%;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 25px;
`;

export default function Featured() {
  return (
    <Bg>
      <Center>
        <Wrapper>
          <Column>
            <div>
              <Title>Macbook 14 Pro</Title>
              <Desc>
                lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
                ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
                ipsumlorem ipsum lorem ipsum
              </Desc>
              <ButtonsWrapper>
                <Button $outline={true} $white={true}>
                  Read more
                </Button>
                <Button $primary={true}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                  </svg>
                  Add to Cart
                </Button>
              </ButtonsWrapper>
            </div>
          </Column>
          <Column>
            <img
              src="https://next-ecommerce-rahim.s3.amazonaws.com/1728301343982.png"
              alt="laptop rahim macbook"
            />
          </Column>
        </Wrapper>
      </Center>
    </Bg>
  );
}
