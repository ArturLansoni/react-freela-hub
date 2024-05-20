import { Title, FreelancerList } from "./styles";
import { FreelancerItem } from "./components/freelancerItem";

function Home() {

    const freelancers = [
        {
            name: 'Artur Lansoni',
            country: 'Brazil',
            rating: 4.1,
            description: 'Desenvolvedor mobile com vasta experiência em Flutter, Android e iOS. Ele se destaca por seu compromisso com a qualidade e prazos, sempre buscando entregar o melhor resultado possível para seus clientes.',
            skills: ['mobile', 'flutter', 'android', 'ios'],
        },
        {
            name: 'Maria Silva',
            country: 'Portugal',
            rating: 4.7,
            description: 'Designer gráfica talentosa com forte habilidade em Adobe Illustrator e Photoshop. Ela é conhecida por sua criatividade e atenção aos detalhes, sempre buscando criar designs que se destacam e capturam a essência do projeto.',
            skills: ['design', 'adobe', 'photoshop', 'illustrator'],
        },
        {
            name: 'John Doe',
            country: 'United States',
            rating: 4.5,
            description: 'Desenvolvedor web full-stack com experiência em JavaScript, React e Node.js. Ele é conhecido por suas soluções eficientes e escaláveis, sempre focado em entregar um produto final que atenda às necessidades do cliente.',
            skills: ['web', 'javascript', 'react', 'nodejs'],
        },
        {
            name: 'Sophie Laurant',
            country: 'France',
            rating: 4.1,
            description: 'Especialista em marketing digital com foco em SEO e publicidade em mídias sociais. Ela é orientada a resultados e tem um histórico comprovado de ajudar empresas a aumentar sua visibilidade online e alcançar seus objetivos de marketing.',
            skills: ['marketing', 'seo', 'socialmedia', 'advertising'],
        }, {
            name: 'Li Wei',
            country: 'China',
            rating: 4.6,
            description: 'Engenheiro de software sênior com vasta experiência em desenvolvimento de backend usando Python e Django. Ele é conhecido por criar soluções robustas e escaláveis que atendem às necessidades de negócios complexos.',
            skills: ['backend', 'python', 'django'],
        },
        {
            name: 'Carlos García',
            country: 'Spain',
            rating: 3.9,
            description: 'Especialista em segurança cibernética com uma forte compreensão de várias estruturas de conformidade e padrões de segurança. Ele é altamente habilidoso em identificar vulnerabilidades e implementar medidas de segurança eficazes.',
            skills: ['cybersecurity', 'compliance', 'security'],
        },
        {
            name: 'Anna Schmidt',
            country: 'Germany',
            rating: 4.7,
            description: 'Gerente de projeto de TI com experiência em gerenciamento ágil de projetos. Ela é conhecida por sua habilidade em coordenar equipes multifuncionais e entregar projetos de alta qualidade no prazo.',
            skills: ['projectmanagement', 'agile', 'scrum'],
        },
    ];

    return (
        <>
            <Title >Freela HUB</Title>
            <FreelancerList>
                {freelancers.map(freelancer => <FreelancerItem
                    {...freelancer}
                    onClick={() => console.log(freelancer.name)}
                />)}
            </FreelancerList>
            <div style={{ height: '4rem' }} />
        </>
    );
}

export { Home };