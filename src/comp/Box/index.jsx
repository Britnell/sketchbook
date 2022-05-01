import styled from "styled-components";

function Box({ width, height, depth }) {
  const WMAX = Math.max(width, depth);
  const HMAX = Math.max(height);

  const Container = styled.div`
    perspective: 600px;
    position: relative;
    width: ${WMAX}px;
    height: ${HMAX}px;
    background-color: rgb(244, 244, 244);

    margin: 4rem 2rem;
  `;

  const Cube = styled.div`
    width: ${WMAX}px;
    height: ${HMAX}px;
    position: relative;
    transform-style: preserve-3d;
    transform: translateZ(-${depth / 1}px);

    animation: spin 20s linear infinite;
    @keyframes spin {
      0% {
        transform: rotateY(-180deg);
      }
      100% {
        transform: rotateY(180deg);
      }
    }
  `;

  const Front = styled.div`
    position: absolute;
    border: 1px solid black;
    width: ${width}px;
    height: ${height}px;
    left: ${(WMAX - width) / 2}px;
    top: ${(HMAX - height) / 2}px;
    transform: rotateY(0deg) translateZ(${depth / 2}px);
  `;

  const Back = styled.div`
    position: absolute;
    border: 1px solid black;
    width: ${width}px;
    height: ${height}px;
    left: ${(WMAX - width) / 2}px;
    top: ${(HMAX - height) / 2}px;
    transform: rotateY(180deg) translateZ(${depth / 2}px);
  `;

  const Left = styled.div`
    position: absolute;
    border: 1px solid black;
    width: ${depth}px;
    height: ${height}px;
    left: ${(WMAX - depth) / 2}px;
    top: ${(HMAX - height) / 2}px;
    transform: rotateY(-90deg) translateZ(${width / 2}px);
  `;
  const Right = styled.div`
    position: absolute;
    border: 1px solid black;
    width: ${depth}px;
    height: ${height}px;
    left: ${(WMAX - depth) / 2}px;
    top: ${(HMAX - height) / 2}px;
    transform: rotateY(90deg) translateZ(${width / 2}px);
  `;

  const Top = styled.div`
    position: absolute;
    border: 1px solid black;
    width: ${width}px;
    height: ${depth}px;
    top: ${(HMAX - depth) / 2}px;
    left: ${(WMAX - width) / 2}px;
    transform: rotateX(90deg) translateZ(${height / 2}px);
  `;
  const Bottom = styled.div`
    position: absolute;
    border: 1px solid black;
    width: ${width}px;
    height: ${depth}px;
    top: ${(HMAX - depth) / 2}px;
    left: ${(WMAX - width) / 2}px;
    transform: rotateX(-90deg) translateZ(${height / 2}px);
  `;

  return (
    <>
      <Container>
        <Cube>
          <Front>FRONT</Front>
          <Back>BACK</Back>
          <Left>Left</Left>
          <Right>Right</Right>
          <Top>Top</Top>
          <Bottom>Bottom</Bottom>
        </Cube>
      </Container>
    </>
  );
}

export default Box;
