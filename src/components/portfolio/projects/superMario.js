const superMario = {
  images: [
    {src: 'https://imgur.com/uNhGQD4.gif'},
    {src: 'https://imgur.com/rdaF1Rb.gif'},
    {src: 'https://imgur.com/Is2pQW2.gif'}
  ],
  title: 'Super Mario Clone',
  url: 'https://github.com/bliuberries/superMario',
  github: 'https://github.com/bliuberries/superMario',
  description: 'While creating Super Mario, one of my biggest struggles was getting Mario to interact properly with the environment. When I finally figured out how to jump, I realized I was able to fly (by pressing the space bar repeatedly) and needed to correct that by making it so he can only jump when he was on the ground. Then when I created more objects(walls and platforms), I needed to make sure I wasn\'t flying through walls and thus needed to create a collision layer to detect when Mario came in contact with the walls and was then able to make it so walls were impassable. My favorite thing about this project was being able to create Goomba and thus had to handle what would happen when Mario ran into him from the side vs when he was stomped on. The logic didn\'t get easier when I was creating Koopa, but it was a major breakthrough in the creation process.',
  techStack: 'Javascript, Serve, Style-loader'
}

export default superMario;