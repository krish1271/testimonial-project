

    const testimonials=[
        {
            "id":1,
            "name":"krishna",
            "testimonial":"nice one",
            "image": "https://th.bing.com/th/id/OIP.YQGwtpOGecZajkbh2HMMGAHaHa?w=201&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        },
        {
            "id":2,
            "name":"person 2",
            "testimonial":"i love this product",
            "image": "https://th.bing.com/th/id/OIP.Tv3oG-Is7dcMNcysxIVwLAHaHa?w=195&h=194&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        },
        {
            "id":3,
            "name":"person 3",
            "testimonial":"i like it",
            "image": "https://th.bing.com/th/id/OIP.EAzMf4436BdR-LVn7u_TOAHaJ4?w=148&h=198&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        },
        {
            "id":4,
            "name":"person 4",
            "testimonial":"it looks good",
            "image": "https://th.bing.com/th/id/OIP.wZo2tBby5SZMmCGQN3W3bAHaHa?w=195&h=195&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        },
        {
            "id":5,
            "name":"tamil",
            "testimonial":"hello",
            "image": "https://th.bing.com/th/id/OIP.Xm1EXmPOVQQajFrYh3F_WAHaHa?w=176&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        }
]

const imgE1=document.querySelector("img");
const textE1=document.querySelector(".text");
const usernameE1=document.querySelector(".username");

let idx=0;
updateTestimonial()
function updateTestimonial(){
const {id,name,testimonial,image}=testimonials[idx]
imgE1.src=image
textE1.innerHTML=testimonial
usernameE1.innerHTML=name
idx++;
if(idx === testimonials.length){
    idx=0;
}
setTimeout(()=>{
updateTestimonial()
},2000)
}
