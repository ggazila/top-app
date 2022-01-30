import {KeyboardEvent, useEffect, useState} from "react";
import StarIcon from './star.svg';
import cn from "classnames";
import styles from './Rating.module.css';
import {RatingProps} from "./Rating.props";

export const Rating = ({isEditable = false, rating, setRating, className, ...props}: RatingProps): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));
    useEffect(() => {
        constructRating(rating);
    }, [rating]);

    const changeDisplay = (i: number) => {
        if (!isEditable) {
            return;
        }
        constructRating(i);
    };

    const onClickRating = (i: number) => {
        if (!isEditable || !setRating) {
            return;
        }

        setRating(i);
    };

    const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
        if (e.code != 'Space' || !setRating) {
            return;
        }
        setRating(i);

    };

    const constructRating = (currentRating: number) => {
        const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
            console.log(i, currentRating);
            return (
                <span key={i} className={cn(styles.star, {
                    [styles.filled]: i < currentRating,
                    [styles.editable]: isEditable
                })}
                      onMouseEnter={() => changeDisplay(i + 1)}
                      onMouseLeave={() => changeDisplay(rating)}
                      onClick={() => onClickRating(i + 1)}>
                   <StarIcon tabIndex={isEditable ? 0 : -1}
                             onKeyDown={(e: KeyboardEvent<SVGElement>) => {
                                 isEditable && handleSpace(i + 1, e);
                             }}
                   />
                </span>);

        });
        setRatingArray(updatedArray);
    };

    return (
        <div {...props}>
            {ratingArray.map((r, i) => (<span key={i}>{r}</span>))}
        </div>
    )
}