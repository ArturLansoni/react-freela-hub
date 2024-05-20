import { RatingIcon } from "../../../components/icons";
import { Flag } from "../../../components/flag";
import { Row, Spacer } from "../styles";

function FreelancerItem({
    name,
    country,
    rating,
    description,
    skills,
    onClick,
}: {
    name: string;
    country: string;
    rating: number;
    description: string;
    skills: string[];
    onClick: () => void;
}) {
    return (<li>
        <Row>
            <h2>{name}</h2>
            <Flag country={country} />

            <Row>
                <RatingIcon size={20} />
                <div style={{ width: '0.2rem' }} />
                {rating}
            </Row>
        </Row>
        <p>{description}</p>
        <Row>
            {skills.map(skill => <p>#{skill}</p>)}
            <Spacer />
            <button onClick={onClick}>Contratar</button>
        </Row>
    </li>)
}

export { FreelancerItem }