import { PropsWithChildren, ReactNode } from "react";
import { TextAlignment } from "../../../theme/ThemeContext";
import styles from './TextContainer.module.css';

interface Props extends PropsWithChildren {
    children?: ReactNode;
    textAlignment: TextAlignment;
}

//TODO: write tests
const TextContainer: React.FC<Props> = ({children, textAlignment}) => {
    // TODO: Add other alignments, add assertion if no alignment provided
    return <div className={textAlignment == TextAlignment.center ? styles.Center : ''}>{children}</div>
}


export default TextContainer;

