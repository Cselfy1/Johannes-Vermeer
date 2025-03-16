import React from 'react';
import styled from 'styled-components';

const Gallery = () => {
    return (
        <StyledWrapper>
            <h2>Gallery 🖼️ (hover effect)</h2>
            <div className="card">
                <p><img src="/knownPic3.jpg" alt="Image 1" /></p>
                <p><img src="/knownPic.jpg" alt="Image 2" /></p>
                <p><img src="/knownPic2.jpg" alt="Image 3" /></p>
            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #212121;

    h2 {
        color: #fff;
        margin-bottom: 20px;
    }

    .card {
        width: 70%;
        max-width: 800px;
        height: 500px; /* Increased height */
        border-radius: 10px;
        background: transparent; /* Set background to transparent */
        display: flex;
        gap: 10px;
        padding: 1em;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    }

    .card p {
        height: 100%;
        flex: 1;
        overflow: hidden;
        cursor: pointer;
        border-radius: 5px;
        transition: all 0.5s ease;
        background: transparent; /* Set background to transparent */
        border: 2px solid #ff9966;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .card p:hover {
        flex: 4;
    }

    .card p img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
        transition: all 0.5s ease;
    }

    .card p:hover img {
        transform: scale(1.1);
    }
`;

export default Gallery;