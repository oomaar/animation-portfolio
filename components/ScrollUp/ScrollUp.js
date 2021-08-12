import {
    ScrollUpLink,
    ScrollupIcon,
} from "./styledScrollUp";

export const ScrollUp = ({ show }) => {
    return (
        <ScrollUpLink href="#" show={show}>
            <ScrollupIcon>
                <i className="uil uil-arrow-up"></i>
            </ScrollupIcon>
        </ScrollUpLink>
    );
};
