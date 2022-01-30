import {PProps} from "./P.props";
import myStyles from './P.module.css';
import cn from 'classnames';

export const P = ({size = 'm', children, className, ...props}: PProps): JSX.Element => {
    return (
        <>
            <p
                className={
                    cn(myStyles.p, className, {
                        [myStyles.s]: size == 's',
                        [myStyles.m]: size == 'm',
                        [myStyles.l]: size == 'l',
                    })
                }
                {...props}
            >
                {children}
            </p>
        </>
    )
};