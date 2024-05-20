import Brazil from '../assets/brazil.png';
import UnitedStates from '../assets/united-states.png';
import China from '../assets/china.png';
import France from '../assets/france.png';
import Spain from '../assets/spain.png';
import Germany from '../assets/germany.png';

function Flag({ country }: { country: string }) {
    function getFlag(): string {
        return {
            'France': France,
            'China': China,
            'United States': UnitedStates,
            'Brazil': Brazil,
            'Spain': Spain,
            'Germany': Germany,
        }[country] || Brazil;
    }

    return (
        <img src={getFlag()} alt="Brazil icon flag" style={{ height: 20, width: 20 }} />
    )
}

export { Flag }