import axios from 'axios';

export default axios.create({
    baseURL : 'https://api.yelp.com/v3/businesses',
    headers : {
        Authorization: 'Bearer fL383ksGhBx0OSFZfFR4V9aVcSErzcZk885eQl6X15SFUHuruvzIO7pGj1npyJh3vbCJzh-FiQhF1F2ENA8LCby4DzGlbO75CuUkl6cIFTcV4h9-OkW6zwv3qb1hX3Yx'


    }
});