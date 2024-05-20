import { RatingIcon } from "../../../components/icons";
import { Flag } from "../../../components/flag";
import { Link } from "react-router-dom";
import { Row, Spacer } from "../../../styles";

function FreelancerItem({
    id,
    name,
    country,
    rating,
    description,
    skills,
    imageURL,
}: Freelancer) {
    return (<li>
        <Row>
            <img src={imageURL} alt="" />
            <Spacer />
            <h2>{name}</h2>
            <Spacer />
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

            <Link to={`/detail/${id}`}>
                <button>Contratar</button>
            </Link>
        </Row>
    </li>)
}

export { FreelancerItem }