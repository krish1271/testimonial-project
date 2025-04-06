

    const testimonials=[
        {
            "id":1,
            "name":"krishna",
            "testimonial":"Very nice product and fabric thanks",
            "image": "https://th.bing.com/th/id/OIP.Y-l29lwKCZwn5GfE3c9z-AHaLH?w=204&h=306&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        },
        {
            "id":2,
            "name":"vijay",
            "testimonial":"This product is good it glowing my skin day by day i am recommend to everyone use this product",
            "image": "https://th.bing.com/th/id/OIP.x_9jp-XNe6UoHFr5xQhL9QHaLH?w=208&h=305&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        },
        {
            "id":3,
            "name":"sanjay",
            "testimonial":"I love all my purchases from them. Delivery timeline is okay but their return and exchange is superb ",
            "image": "https://th.bing.com/th/id/OIP.YIre5HGHiqBa7DCmrF4KwwHaJQ?w=208&h=260&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        },
        {
            "id":4,
            "name":"mani",
            "testimonial":"Great platform for shopping, amazing service by staff with full precautions method, try it out you won't regret!!!!",
            "image": "https://th.bing.com/th/id/OIP.hsn3jsx2zlphzFAG2owzKAHaHa?w=208&h=208&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        },
        {
            "id":5,
            "name":"tamil",
            "testimonial":"Better for your outfits and this site never delivered fake products",
            "image": "https://th.bing.com/th/id/OIP.x9x0GylTLDAFGSdc0lV3WgHaJt?w=208&h=273&c=7&r=0&o=5&dpr=1.3&pid=1.7"
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
