//! LIVE SHARE FOR CLASS EXERCISE

//Our series data here
//? Initialisation des données nécessaires à l'affichage des cartes
// *** On a utilisé un array qui contient des objets avec les données relatives aux séries

//! Pose un problème au niveau des imports de modules (Parce que c'est un array et pas un objet)
const data = [
    {
    id : 1,
    title :"Lupin", 
    img :"https://m.media-amazon.com/images/M/MV5BNzRlNGUzMmEtYTg0Ni00N2U2LTg4YWEtNDdlNmMwYjBlZDQ0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY1200_CR90,0,630,1200_AL_.jpg",
    seasons :2,
    episodes :10,
    duration :56,
    synopsis :"Il y a 25 ans, la vie du jeune Assane Diop est bouleversée lorsque son père meurt après avoir été accusé d'un crime qu'il n'a pas commis. Aujourd’hui, Assane va s'inspirer de son héros, Arsène Lupin - Gentleman Cambrioleur, pour le venger…",
    },
    
    {
    id : 2,
    title :"Game of Thrones", 
    img :"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2019%2F04%2Fgot_cover.jpg&q=85",
    seasons :8,
    episodes :12,
    duration :57,
    synopsis :"Game of Thrones est un Américain fantastique drame série télévisée créée par David Benioff et DB Weiss pour HBO . Il s'agit d'une adaptation de A Song of Ice and Fire , une série de romans fantastiques de George RR Martin , dont le premier est A Game of Thrones . L'émission a été tournée au Royaume-Uni, au Canada, en Croatie , en Islande , à Malte , au Maroc et en Espagne. Il a été créé sur HBO aux États-Unis le 17 avril 2011 et s'est terminé le 19 mai 2019, avec 73 épisodes diffusés sur huit saisons.Situé sur les continents fictifs de Westeros et Essos , Game of Thrones a une grande distribution d'ensemble et suit plusieurs arcs d'histoire tout au long de la série. Un arc majeur concerne le trône de fer des sept royaumes de Westeros et suit un réseau d'alliances et de conflits entre les nobles dynasties, soit en lice pour revendiquer le trône, soit en luttant pour son indépendance. Un autre se concentre sur le dernier descendant de la dynastie dirigeante déchue du royaume, qui a été exilé à Essos et prépare un retour au trône. Un troisième arc d'histoire suit le Night's Watch, un ordre militaire défendant le royaume contre les menaces du Nord.Game of Thrones a attiré un nombre record de téléspectateurs sur HBO et dispose d'une base de fans large, active et internationale. Les critiques ont loué la série pour son jeu d'acteur, ses personnages complexes, son histoire, sa portée et ses valeurs de production, bien que son utilisation fréquente de la nudité et de la violence (y compris la violence sexuelle) ait fait l'objet de critiques. La dernière saison a reçu un contrecoup critique important pour sa durée réduite et ses décisions créatives, beaucoup la considérant comme une conclusion décevante. La série a reçu 59 Primetime Emmy Awards , le plus par une série dramatique, y compris la série dramatique exceptionnelle en 2015, 2016, 2018 et 2019. Ses autres prix et nominations comprennent trois prix Hugo pour la meilleure présentation dramatique, un Peabody Award et cinq nominations pour le Golden Globe Award de la meilleure série télévisée - Drame . De nombreux critiques et publications ont désigné l'émission comme l'une des meilleures séries télévisées de tous les temps.",
    },
    
    {
    id : 3,
    title :"Narcos Mexico", 
    img :"https://nrjantilles.com/wp-content/uploads/Narcos-Mexico-saison-3.jpg",
    seasons :2,
    episodes :10,
    duration :45,
    synopsis :"Elle raconte l'ascension du cartel de Guadalajara dans les années 1980 au travers de Miguel Ángel Félix Gallardo (Diego Luna), en narrant comment ce dernier a réussi à en faire un des grands empires de la drogue."
    },
    
    {
    id : 4,
    title :"Shingeki no Kyojin",
    img :"data:image/jpeg;base64,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",
    seasons :4,
    episodes :24,
    duration :25,
    synopsis :"Il y a  107 ans les titans ont presque exterminé la race humaine. Ces Titans mesurent principalement une diziane de mètres et ils se nourrissent d'humains. Les humains ayant survécus à cette extermination ont construit une cité fortifiée avec des murs d'enceinte de 50 mètres de haut pour pouvoir se protéger. (allez lire ou voir ça)",    
    },

    {
    id : 5,
    title :"Bleach", 
    img :"https://www.nautiljon.com/images/anime/00/42/bleach_24.jpg?1609231031",
    seasons :16,
    episodes :25,
    duration :25,
    synopsis :"Kurosaki Ichigo, un étudiant de quinze ans aux cheveux orange qui aime la bagarre (comme son père) a la particularité de voir les fantômes ainsi que de pouvoir les toucher. Cela l'amène à rencontrer Kuchiki Rukia, un Shinigami (dieu de la mort) qui combat un Hollow. Le déroulement du combat amène Kuchiki à donner ses pouvoirs à Ichigo qui deviens alors lui même un Shinigami. C'est maintenant à son tour de protéger la ville des Hollows.",        
    },

    {
    id : 6,
    title : "Sons Of Anarchy", 
    img :"https://fr.web.img3.acsta.net/pictures/18/11/13/12/24/3932240.jpg",
    seasons :7,
    episodes :15,
    duration :45,
    synopsis :"Cette série dramatique retrace la vie d'un club soudé de motards hors-la-loi opérant à Charming, ville fictive de la Central Valley, en Californie. Elle met en vedette Charlie Hunnam dans le rôle de Jackson 'Jax' Teller, vice-président, puis président du club. Il commence bientôt à s'interroger sur le club et lui-même.",        
    },
    
    {
    id : 7,
    title :"PsychoPass", 
    img :"https://www.nautiljon.com/images/anime/00/39/psycho-pass_2293.jpg",
    seasons :3,
    episodes :22,
    duration :25,
    synopsis :"L'histoire se déroule dans un futur où il est désormais possible de quantifier l'état mental d'une personne, ceci est désigné par le terme Psycho-Pass. Grâce à ce système, il est possible de repérer les criminels en devenir. La Section d'Investigation Criminelle pour laquelle travaille Shinya Kogami est chargée d'appliquer les mesures lorsqu'un individu est jugé dangereux. Akane Tsunemori est une fraîche recrue qui intègre tout juste la section et qui se rendra vite compte que sur le terrain, les choses ne sont pas comme elle les a apprises.",        
    },
    {
    id :8,
    title :"Vikings" , 
    img :"https://fr.web.img6.acsta.net/medias/nmedia/18/95/52/44/20457563.jpg",
    seasons :6,
    episodes :93,
    duration :59,
    synopsis :"Scandinavie, à la fin du 8ème siècle. Ragnar Lodbrok, un jeune guerrier viking, est avide d'aventures et de nouvelles conquêtes. Lassé des pillages sur les terres de l'Est, il se met en tête d'explorer l'Ouest par la mer. Malgré la réprobation de son chef, Haraldson, il se fie aux signes et à la volonté des dieux, en construisant une nouvelle génération de vaisseaux, plus légers et plus rapides...",        
    },

    {
    id : 9,
    title : "El Chapo", 
    img : "https://upload.wikimedia.org/wikipedia/en/8/8e/El_Chapo_Netflix_poster.jpg",
    seasons :3,
    episodes :10,
    duration :45,
    synopsis : "Basée fortement sur des faits réels, elle retrace la vie du baron de la drogue mexicain Joaquin Guzman Lorea dit 'El Chapo' et mets en lumière l'influence des puissants cartels et du narco-trafic dans la vie politique et sociale mexicaine.",        
    },
    
    {
    id : 10,
    title : "La disparition de Soledad", 
    img : "https://www.netflix-news.com/wp-content/uploads/2020/10/AAAABaqOVhSy89wumiU8uNdEe1mHXUkTSrVkMTYD9jVxGX5ynuyle4QVKrc61Z4qVHZQeLMaY_PsFavkNXnToN3t_0vt2Vaygxemc1-acszrPxRxWw79o5HnKH4HCyuWKg.jpg",
    seasons : 1,
    episodes : 11,
    duration : 50,
    synopsis : "Antonio se fait volontairement incarcérer à La Brecha, la pire des prisons colombiennes, bien décidé à retrouver l'homme qui a enlevé sa fille des années plus tôt.",        
    },
    
    {
    id :11,
    title : "SteinsGate", 
    img :"https://media.senscritique.com/media/000017727744/source_big/Steins_Gate_0.jpg",
    seasons :2,
    episodes :24,
    duration :25,
    synopsis :"Dans un quartier d'Otaku à Akihabara, un groupe d'amis modifient leurs microondes de manière à en faire un dispositif qui leur permet d'envoyer des messages écrits vers le passé.Une organisation, CERN, a mené différentes recherches à propos des voyages temporels.À présent, le groupe, ayant effectué plusieurs expériences diverses, doit absolument éviter de se faire capturer par cette organisation qui les perturbe en les traquant...",        
    },
    
    {
    id : 12,
    title :"Ratched", 
    img :"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQoeYKk2UqySLgo_9ShnUNUTzMj0aR6obIlrFqa7JD7azXO7XbQ",
    seasons :2,
    episodes :9,
    duration :50,
    synopsis :"Ratched est une série dramatique à suspense qui raconte l'histoire d'origine de l'infirmière d'asile Mildred Ratched. En 1947, Mildred arrive dans le nord de la Californie pour chercher un emploi dans un hôpital psychiatrique de premier plan où de nouvelles expériences troublantes ont commencé sur l'esprit humain. En mission clandestine, Mildred se présente comme l'image parfaite de ce qu'une infirmière dévouée devrait être, mais les roues tournent toujours et alors qu'elle commence à infiltrer le système de santé mentale et ceux qui le composent, l'extérieur élégant de Mildred cache une obscurité croissante qui a longtemps brûlé à l'intérieur, révélant que de vrais monstres sont faits, pas nés. ",        
    },

    {
    id : 13,
    title :"Kaamelott", 
    img :"https://exkaalibur.com/wp-content/uploads/2020/11/2577964.jpg",
    seasons : 6,
    episodes : 50,
    duration : 5,
    synopsis :"Kaamelott est une série télévisée française humoristique et dramatique de fantasy historique créée par Alexandre Astier, Alain Kappauf et Jean-Yves Robin et diffusée entre le 3 janvier 2005 et le 31 octobre 2009 sur M6.L'origine du nom de la série est la cité de Camelot, avec une orthographe et une graphie particulières faisant ressortir les initiales AA de l'auteur, et les deux T finaux forçant l'homophonie avec camelote.De plus en plus populaire depuis 2006, la série s’inspire de la légende arthurienne et apporte une vision décalée de la légende en présentant un roi Arthur qui peine à être à la hauteur de la tâche que les dieux lui ont confiée. Entouré de chevaliers de la Table ronde passablement incompétents, confronté à la chute de l’Empire romain et aux incessantes incursions barbares, il doit encore trouver le Saint Graal.",        
    },

    {
    id : 14,
    title : "Notre Planete", 
    img : "https://images-na.ssl-images-amazon.com/images/I/71+5VGRWxdL.jpg",
    seasons : 1,
    episodes : 8,
    duration : 49,
    synopsis : "Embarquez pour un voyage inoubliable au cœur des paysages les plus spectaculaires au monde.",        
    },
    
    {
    id : 15,
    title :"Rick Et Morty", 
    img : "https://images-na.ssl-images-amazon.com/images/I/612tCJzDy0L._AC_.jpg",
    seasons : 4,
    episodes : 10,
    duration : 22,
    synopsis :"Rick et Morty (Rick and Morty) est une série d'animation pour adultes américaine créée par Justin Roiland et Dan Harmon, diffusée depuis le 2 décembre 2013 sur Cartoon Network, dans la tranche fin de soirée Adult Swim. La série suit les mésaventures de Rick Sanchez, un scientifique cynique et fantasque, et de son petit-fils, Morty Smith, perturbé et facilement influençable, qui partagent leur temps entre une vie domestique et des aventures interdimensionnelles. Roiland double les personnages principaux, tandis que Chris Parnell, Spencer Grammer et Sarah Chalke prêtent leur voix au reste de la famille.",        
    },
            
];

//? ???
const cards = document.querySelector('.card');

//? Création d'une classe Serie qui allait contenir le prototype de toutes les séries


//? 1.Déclaration de la classe Serie
 class Serie {
     //? 2.Définition du constructor de la classe Serie, avec les infos nécessaires à sa création
   constructor(title,img,seasons,episodes,duration,synopsis,){
    this.title = title;
    this.img = img;
    this.seasons = seasons;
    this.episodes = episodes;
    this.duration = duration;
    this.synopsis = synopsis;

}

    //? Création d'une méthode liée à la classe Serie qui sert à afficher un résumé du synopsis
    summary(){
        return `${summary}...`;
    }

//    Duration 
// tps cumulé de tous les épisodes
// durée de chaque épisode * nbr d'épisodes * nbr de saisons &  aditionner la durée de toutes les séries
    //? Création d'une méthode liée à la classe Serie qui permet de calculer le nombre de temps nécessaire pour regarder la Serie au total.
   serieDuration(){
    const oneSerieDuration = this.duration * this.episodes * this.seasons;
    const hours = Math.floor(oneSerieDuration / 60);
    const minutes = oneSerieDuration%60;
    return `${hours}h${minutes}`;
}
}

//! Fin de la classe Serie
//  action au chargement de la page
//? Création d'un gestionnaire d'évènement lié au chargement du DOM
window.addEventListener("DOMContentLoaded",()=>{
    //? Une fois le DOM chargé, créer des objets de la classe Serie qui contiendront les infos sur la Serie à chaque tour de boucle. Le faire jusqu'a la fin du tableau
    for(let serie in data){
      let i = 0;
      let aSerie = new Serie (data[serie].title,data[serie].img,data[serie].seasons,data[serie].episodes,data[serie].duration,data[serie].synopsis);

      console.log(aSerie);

      const cardSerial= document.createElement('div');
      cardSerial.id="case";
      console.log(cardSerial);
      
      //? Création d'élément h2
      const serialName=document.createElement('h2');
      //? Ajout d'un id "title-serie"
      serialName.id="title-serie";
      //? Ajout de texte dans l'élément correspondant au titre contenu dans l'objet
      serialName.innerText=aSerie.title;
      //? Insertion de cet élément dans la carte qui contient toutes les infos de la série
      cardSerial.appendChild(serialName);
  
      const imgSerie=document.createElement('img');
      imgSerie.id="image-serie";
      imgSerie.src=aSerie.img;
      cardSerial.appendChild(imgSerie);
      console.log(imgSerie)
  
      const cardDetail= document.createElement('div');
      cardDetail.id="details";
      cardSerial.appendChild(cardDetail);
      console.log(cardDetail)
  
      const nbSeason=document.createElement('p');
      nbSeason.id="seasons";
      nbSeason.innerText=aSerie.seasons;
      cardDetail.appendChild(nbSeason);
      console.log(nbSeason)
  
      const nbEpisode=document.createElement('p');
      nbEpisode.id="episodes";
      nbEpisode.innerText=aSerie.episodes;
      cardDetail.appendChild(nbEpisode);
      console.log(nbEpisode)
  
      const epDuration=document.createElement('p');
      nbEpisode.id="duration";
      nbEpisode.innerText=aSerie.duration;
      cardDetail.appendChild(epDuration);
      console.log(epDuration)
  
      const synopsis = document.createElement('p');
      nbSeason.id="synopsis";
      nbSeason.innerText=aSerie.synopsis.substr(0,150);
      cardSerial.appendChild(synopsis);
      console.log(synopsis)

      
      bigContainer.appendChild(cardSerial);

    }


});

// Selection of #ID and .class 
const containerCard = document.querySelector("#case");
const bigContainer = document.querySelector("#card-container");
const title = document.querySelector("#title-serie");
const image = document.querySelector("#image-serie");
const season = document.querySelector("#season")
const episodeNumber = document.querySelector("#episode")
const durationEpisode = document.querySelector("#duration");
const synopsis = document.querySelector("#synopsis");
const totalDuration = document.querySelector("#total-duration");
 
 
