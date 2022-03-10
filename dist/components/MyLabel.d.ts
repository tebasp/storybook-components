/// <reference types="react" />
import './myLabel.css';
export interface MyLabelProps {
    /**
     *  This is the message of the label
     */
    label: string;
    /**
     * This corresponds to the font size
     */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Changes the color of the label text
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
     * Set uppercase
     */
    allCaps?: boolean;
    /**
     * Set custom font color
     */
    fontColor?: string;
}
/**
 * Default label for forms
 */
export declare function MyLabel({ label, size, color, allCaps, fontColor, }: MyLabelProps): JSX.Element;
export default MyLabel;
