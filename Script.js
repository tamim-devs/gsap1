// gsap.to("#box1",{
//   x:1000,
//   duration:2,
//   delay:1,
//   rotate: 360,
//   backgroundColor: "blue",
//   borderRadius: "50%",
//   scale: 2
// })
// gsap.from("#box2",{
//   x:1000,
//   duration:2,
//   delay:3
// })

// gsap.from("h1",{
//   opacity: 0,
//   duration: 2,
//   y: 30,
//   delay: 1,
//   // stagger: 0.5 
//   stagger: -1 
// })

let tl = gsap.timeline()
tl.to('#box1',{
  x: 1500,
  rotate: 360,
  duration: 1.5
})
tl.to('#box2',{
  x: 1500,
  rotate: 360,
  duration: 1.5
})