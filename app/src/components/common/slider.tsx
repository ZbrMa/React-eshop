import { useRef, useState,useEffect, CSSProperties } from "react";
import { IoChevronBack,IoChevronForward } from "react-icons/io5";
import './styles/slider.css';
import React from "react";

type Props = {
    children:React.ReactNode;
    smallDev:number;
    midDev:number;
    largeDev:number;
    extraDev:number;
};

export function Slider({children,smallDev,midDev,largeDev,extraDev}:Props) {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [maxStep,setMaxStep] = useState(0);
    const [step,setStep] = useState(0);
    const [position,setPosition] = useState(0);
    const [childWidth, setChildWidth] = useState(0);
    const [carouselWidth,setCarouselWidth] = useState('');
    
    const updateSizes = () =>{
        if (carouselRef.current){
            const carouselWidth = carouselRef.current.offsetWidth;
                setChildWidth(carouselWidth / carouselRef.current.childElementCount);
            getVisibleCards(); 
        };
        setPosition(0);
    };

    const getVisibleCards = () =>{
        let visibleCard = 0;
        if (carouselRef.current){
            let calc:number;
                if (window.innerWidth >= 1200) {
                    setMaxStep(carouselRef.current.childElementCount - extraDev);
                    visibleCard = extraDev;
                    calc = 100 / extraDev;
                } else if (window.innerWidth >= 992) {
                    setMaxStep(carouselRef.current.childElementCount - largeDev);
                    visibleCard = largeDev;
                    calc = 100 / largeDev;
                } else if (window.innerWidth >= 768) {
                    setMaxStep(carouselRef.current.childElementCount - midDev);
                    visibleCard = midDev;
                    calc = 100 / midDev;
                } else {
                    setMaxStep(carouselRef.current.childElementCount - smallDev);
                    visibleCard = smallDev;
                    calc = 100 / smallDev;
                };
            
            setCarouselWidth('calc( ' + carouselRef.current.childElementCount + ' * ' + calc + '% )');
        }
        
        return visibleCard;
    };

    useEffect(() => {
        updateSizes();
        window.addEventListener('resize', updateSizes);

        return () => {
            window.removeEventListener('resize', updateSizes);
        };
    }, [children]);

    useEffect(() => {
        if (carouselRef.current) {
            carouselRef.current.style.transform = `translateX(${position}px)`;
        }
    }, [position,childWidth]);

    const moveLeft = () => {
        if (carouselRef.current) {
            const newPosition = Math.min(position + childWidth , 0);
            if (newPosition !== position) {
                setPosition(newPosition);
                if (position !== 0 && step-1>=0) {
                    setStep((prevStep) => prevStep - 1);
                }
            }
        }
    };
    
    const moveRight = () => {
        if (carouselRef.current && children) {
            const carouselChildNum = carouselRef.current.childElementCount;
            let visibleCards = getVisibleCards();
            const maxMove = -(childWidth * (children ? carouselChildNum - visibleCards : 0));
            const newPosition = Math.max(position - childWidth, maxMove);
            if (newPosition !== position) {
                setPosition(newPosition);
                if (newPosition <= maxMove || step <=maxStep) {
                    setStep((prevStep) => prevStep + 1);
                }
            }
        }
    };

    return(
        <div className="slider">
            <button onClick={moveLeft}><IoChevronBack></IoChevronBack></button>
            <div className="outer-carousel">
                <div className="slider-moving" ref={carouselRef} id="carousel" style={{width:`${carouselWidth}`, gridTemplateColumns:`repeat(${carouselRef.current?.childElementCount},1fr)`}}>
                    {children}
                </div>
            </div>
            <button onClick={moveRight}><IoChevronForward></IoChevronForward></button>
        </div>
    );
};

type AutoProps = {
    children:React.ReactNode;
    smallDev:number;
    midDev:number;
    largeDev:number;
    extraDev:number;
    styles?:CSSProperties;
};

export function AutoSlider({children,smallDev,midDev,largeDev,extraDev,styles}:AutoProps) {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [maxStep,setMaxStep] = useState(0);
    const [step,setStep] = useState(0);
    const [position,setPosition] = useState(0);
    const [childWidth, setChildWidth] = useState(0);
    const [carouselWidth,setCarouselWidth] = useState('');
    
    const updateSizes = () =>{
        if (carouselRef.current){
                setChildWidth(carouselRef.current.offsetWidth / carouselRef.current.childElementCount);
            getVisibleCards(); 
        };
        setPosition(0);
    };

    const getVisibleCards = () =>{
        let visibleCard = 0;
        if (carouselRef.current){
            let calc:number;
                if (window.innerWidth >= 1220) {
                    setMaxStep(carouselRef.current.childElementCount - extraDev);
                    visibleCard = extraDev;
                    calc = 100 / extraDev;
                } else if (window.innerWidth >= 900) {
                    setMaxStep(carouselRef.current.childElementCount - largeDev);
                    visibleCard = largeDev;
                    calc = 100 / largeDev;
                } else if (window.innerWidth >= 768) {
                    setMaxStep(carouselRef.current.childElementCount - midDev);
                    visibleCard = midDev;
                    calc = 100 / midDev;
                } else {
                    setMaxStep(carouselRef.current.childElementCount - smallDev);
                    visibleCard = smallDev;
                    calc = 100 / smallDev;
                };
            
            setCarouselWidth('calc( ' + carouselRef.current.childElementCount + ' * ' + calc + '% )');
        }
        
        return visibleCard;
    };

    useEffect(() => {
        updateSizes();
        window.addEventListener('resize', updateSizes);

        return () => {
            window.removeEventListener('resize', updateSizes);
        };
    }, [children]);

    useEffect(() => {
        if (carouselRef.current) {
            carouselRef.current.style.transform = `translateX(${position}px)`;
        }
    }, [position,childWidth]);

    const moveRight = () => {
        if (carouselRef.current && children) {
            const carouselChildNum = carouselRef.current.childElementCount;
            let visibleCards = getVisibleCards();
            const maxMove = -(carouselRef.current.offsetWidth / carouselRef.current.childElementCount * (children ? carouselChildNum - visibleCards : 0));
            const newPosition = position - carouselRef.current.offsetWidth / carouselRef.current.childElementCount;
            if (newPosition !== position) {
                setPosition(newPosition);
                if (step + 1 <= maxStep) {
                    setStep((prevStep) => prevStep + 1);
                }
                else {
                    setPosition(0);
                    setStep(0);
                }
            };
        };
    };

    useEffect(() => {
        const moveInterval = setInterval(() => {
            moveRight();
        }, 4000);
    
        return () => clearInterval(moveInterval);
    }, [step, maxStep,childWidth]);

    return(
        <div className="auto-slider" style={styles}>
            <div className="outer-carousel">
                <div className="slider-moving" ref={carouselRef} id="carousel" style={{width:`${carouselWidth}`, gridTemplateColumns:`repeat(${carouselRef.current?.childElementCount},1fr)`}}>
                    {children}
                </div>
            </div>
        </div>
    );
}