import { Link, useParams } from "react-router-dom";
import { Row, Spacer, Title } from "../../styles";
import { FreelancerDetail, ProjectList, ReviewList } from "./styles";
import { useEffect } from "react";
import { useFreelancers } from "../../hooks/useFreelancers";
import { Flag } from "../../components/flag";
import { RatingIcon } from "../../components/icons";

function Detail() {
    let { id } = useParams();
    const { getFreelancerById, freelancer } = useFreelancers();
    useEffect(() => {
        getFreelancerById(id ?? '');
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Link to='/'>
                <Title>Freela HUB</Title>
            </Link>
            <FreelancerDetail>
                <Row>
                    <img src={freelancer?.imageURL} alt="" />
                    <h2>{freelancer?.name}</h2>
                    <Flag country={freelancer?.country ?? 'Brazil'} />

                    <Row>
                        <RatingIcon size={20} />
                        <div style={{ width: '0.2rem' }} />
                        {freelancer?.rating ?? 0.0}
                    </Row>
                </Row>
                <p>{freelancer?.description}</p>
                <Row>
                    {freelancer?.skills.map(skill => <p>#{skill}</p>)}
                    <Spacer />


                </Row>

                <ProjectList>
                    <h3>Projetos</h3>
                    {freelancer?.projects?.map(project =>
                        <div>
                            <h4>{project.title}</h4>
                            <p>{project.description}</p>
                        </div>
                    )}
                </ProjectList>

                <ReviewList>
                    <h3>Avaliações</h3>
                    {freelancer?.reviews?.map(review =>
                        <div>
                            <Row>
                                <h4>{review.name}</h4>
                                <p><RatingIcon size={16} /> {review.rating}</p>
                            </Row>
                            <p>{review.comment}</p>
                        </div>
                    )}
                </ReviewList>


                <button>Contratar</button>

                <Link to='/'>Voltar</Link>
            </FreelancerDetail>
            <div style={{ height: '4rem' }} />
        </div>
    );
}

export { Detail };