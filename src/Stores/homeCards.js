import {reactive} from "vue";

import iconHome from '@/assets/icons/home.svg'
import iconToken from '@/assets/icons/tokenization.svg'
import iconData from '@/assets/icons/data.svg'

export const homeCards = reactive([
    {
        icon: iconToken,
        heading: 'Property Tokenization',
        description: 'Landia acquires and tokenizes individual real estate properties from various locations worldwide, with each token representing ownership in a specific property.'
    },{
        icon: iconHome,
        heading: 'Income Generation',
        description: 'Properties within the Landia portfolio are professionally leased and managed, ensuring consistent cash flow and long-term value appreciation.'
    },{
        icon: iconData,
        heading: 'Hold and Earn',
        description: 'By holding Landia property tokens, you gain from both the rental income and the appreciation of the underlying real estate, allowing you to earn by simply holding onto your tokens.'
    },
])