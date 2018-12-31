const initState = {
  posts: [
    {id: 1, title: 'Pikachu', body: 'Pikachu (Japanese: ピカチュウ Pikachu) is an Electric-type Pokémon introduced in Generation I. It evolves from Pichu when leveled up with high friendship and evolves into Raichu when exposed to a Thunder Stone. However, the starter Pikachu in Pokémon Yellow will refuse to evolve into Raichu unless it is traded and evolved on another save file.'},
    {id: 2, title: 'Bulbasaur', body: 'Bulbasaur (Japanese: フシギダネ Fushigidane) is a dual-type Grass/Poison Pokémon introduced in Generation I. It evolves into Ivysaur starting at level 16, which evolves into Venusaur starting at level 32.'},
    {id: 3, title: 'Charmander', body: 'Charmander (Japanese: ヒトカゲ Hitokage) is a Fire-type Pokémon introduced in Generation I. It evolves into Charmeleon starting at level 16, which evolves into Charizard starting at level 36.'},
  ],
};

const rootReducer = (state=initState, action) => {
  if (action.type === 'DELETE_POST') {
    let newPosts = state.posts.filter(post => post.id != action.id);
    return {
      ...state,
      posts: newPosts,
    };
  }
  return state;
};

export default rootReducer;