import {TagProps} from "./Tag.props";
import myStyles from './Tag.module.css';
import cn from 'classnames';

export const Tag = ({size = 'm', children, color = 'ghost', href, className, ...props}: TagProps): JSX.Element => {
    return (
        <>
            <div
                className={
                    cn(myStyles.tag, className, {
                        [myStyles.s]: size == 's',
                        [myStyles.m]: size == 'm',
                        [myStyles.ghost]: color == 'ghost',
                        [myStyles.primary]: color == 'primary',
                        [myStyles.green]: color == 'green',
                        [myStyles.grey]: color == 'grey',
                        [myStyles.red]: color == 'red',
                    })
                }
                {...props}
            >
                {href ? <a>{children}</a> : <>{children}</>}
            </div>
        </>
    )
};