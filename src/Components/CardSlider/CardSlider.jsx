import React, { useRef, useEffect } from "react"
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io"
import CardHomeSercives from "../CardHomeServices/CardHomeServices"
import styles from "./CardSlider.module.css"

function CardSlider ( { cardList }) {
    
    const boxRef = React.useRef(null);
    
    
    useEffect(() => {
        
        const handleResize = () => {
            const itemWidth = 300;
            const totalItems = cardList.length;
            if(boxRef.current) {
                const containerWidth = boxRef.current.clientWidth;
                console.log(containerWidth + " This is the scroll container");
                const totalWidth = totalItems * itemWidth;
                console.log(totalWidth + " This is the itemWidth multiplaying by items number");
                boxRef.current.style.width = `${totalWidth}px`;
    
                // boxRef.current.scrollLeft = totalWidth - containerWidth;
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, [cardList])
    
    const gotoPreviousCard = () => {
        if(boxRef.current) {
            let cardContainerWidth = boxRef.current.clientWidth;
            boxRef.current.scrollLeft -= cardContainerWidth;
            console.log(boxRef.current.scrollLeft)
        }
    };

    const gotoNextCard = () => {
        if(boxRef.current) {
            let cardContainerWidth = boxRef.current.clientWidth;
            boxRef.current.scrollLeft += cardContainerWidth;
            console.log(boxRef.current.scrollLeft)
        }
    };

    return (
        <section className={styles.card_slider_main_container}>
            <section ref={boxRef} className={styles.cards_slider_container}>
                {
                    cardList.map(card => (
                        <CardHomeSercives 
                        key={card.id}
                        service={card.service} 
                        backgroundImage={card.backgroundImage}
                        goTo={card.goTo}
                        />
                        ))
                    }
            </section>
            
            <section className={styles.card_slider_arrows_container}>
                <IoIosArrowRoundBack className={styles.card_arrow_left} onClick={gotoPreviousCard}/>
                <IoIosArrowRoundForward className={styles.card_arrow_right} onClick={gotoNextCard} />
            </section>

        </section>
    )
}

export default CardSlider