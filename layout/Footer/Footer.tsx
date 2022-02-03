import FooterProps from "./Footer.props";
import cn from "classnames";
import styles from './Footer.module.css';
import {format} from 'date-fns';

export const Footer = ({className, ...props}: FooterProps): JSX.Element => {
    return (
        <footer className={cn(className, styles.footer)} {...props}>
            <div>
                2021 - {format(new Date(), 'yyyy')} All rights reserved
            </div>
            <a href="#" target="_blank">Agreements</a>
            <a href="#" target="_blank">Agreements2</a>
        </footer>

    );
};