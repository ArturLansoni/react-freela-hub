import { FreelancerList, SearchArea } from "./styles";
import { FreelancerItem } from "./components/freelancerItem";
import { useFreelancers } from "../../hooks/useFreelancers";
import { useEffect, useState } from "react";
import { Title } from "../../styles";
import { Loader } from "../../components/loader";

function Home() {
    const [searchTerm, setSearchTerm] = useState('');
    const {
        freelancers,
        isLoading,
        loadFreelancers,
        search,
    } = useFreelancers();
    useEffect(() => {
        loadFreelancers();
    }, []);

    function onFilter(event: React.ChangeEvent<HTMLInputElement>) {
        setSearchTerm(event.target.value);
        search(event.target.value);
    }

    function clear() {
        setSearchTerm('');
        search('');
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Title>💼 Freela HUB</Title>

            <SearchArea hideButton={searchTerm.length == 0} >
                <input type="text"
                    placeholder="Pesquisar"
                    onChange={onFilter}
                    value={searchTerm}
                />
                <button onClick={clear}>X</button>
            </SearchArea>
            {isLoading && <Loader />}
            <FreelancerList>
                {freelancers.map(freelancer => <FreelancerItem
                    {...freelancer}
                />)}
            </FreelancerList>
            <div style={{ height: '4rem' }} />
        </div>
    );
}

export { Home };