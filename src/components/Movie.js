import React from 'react'
import styled from 'styled-components';

function Movie() {
    return (
        <Container>
            <h4>Recomendado para você</h4>
            <Content>
                <Wrap>
                    <img src="/images/vingadores.png" />
                </Wrap>
                <Wrap>
                    <img src="/images/homem-aranha.jpeg" />
                </Wrap>
                <Wrap>
                    <img src="/images/star.jpeg" />
                </Wrap>
                <Wrap>
                    <img src="/images/cruella.jpg" />
                </Wrap>
                <Wrap>
                    <img src="/images/incriveis.png" />
                </Wrap>
                <Wrap>
                    <img src="/images/mogli.jpg" />
                </Wrap>
                <Wrap>
                    <img src="/images/rei-leao.jpg" />
                </Wrap>
                <Wrap>
                    <img src="/images/guardioes.jpg" />
                </Wrap>
            </Content>
        </Container>
    )
}

export default Movie;

const Container = styled.div`
    margin-bottom: 10px;
`
const Content = styled.div`
    display:grid;
    grid-gap: 20px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    
`
const Wrap = styled.div`
    cursor: pointer;
    border-radius: 10px;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
    

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(0.9);
        border-color: rgba(249, 249, 249, 0.8);
    }
`


