export const inc = () => ({type:'INC'});
export const dec = () => ({type:'DEC'});//такой синтаксис позволяет нам вернуть обьект
export const rnd = () => {
   return {type:'RND',value: Math.floor(Math.random()*10)}
};