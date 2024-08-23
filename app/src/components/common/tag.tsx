import { useNavigate } from "react-router-dom";
import { NavigationLink } from "../../types/types";
import './styles/tag.css';

interface Props<StateType = unknown> {
    children: React.ReactNode;
    link?: NavigationLink<StateType>;
}

export function Tag<StateType>({ children, link }: Props<StateType>) {
    const navigate = useNavigate();

    const handleClick = () => {
        if (link) {
            if (link.param && link.paramName) {
                navigate(link.link, {
                    state: {
                        [link.paramName]: link.param,
                    },
                });
            } else {
                navigate(link.link);
            }
        }
    };


    return(
        <div className={`tag ${link? 'link': ''}`} onClick={handleClick}>
            <div className="tag-text">{children}</div>
        </div>
    );
};