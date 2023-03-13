# Mon projet HNU3058

Mon projet consiste principalement à refaire [mon site web actuel](http://amelielr.ca), basé sur Drupal, afin d'en simplifier le code. Présentement, les visiteurs ne s'en rendent peut-être pas compte, mais certaines fonctionnalités se sont brisées avec le temps. Une refonte complète est donc grandement la bienvenue.

## Technologies utilisées et choix

J'ai d'abord tenté de recréer ma structure en blocs en HTML et CSS seulement, question de réduire le nombre de lignes de code nécessaires. La manière dont je l'avais initialement monté avec Drupal générant énormément de code avec des *div* superposés l'un sur l'autre pour arriver au résultat escompté. 

Déjà familière avec le HTML/CSS depuis bon nombre d'années, j'ai ensuite revu ma structure initiale afin d'y intégrer de nouvelles balises que je ne connaissais pas, comme *detail* et *summary* ainsi que les listes de définitions me permettant d'organiser l'information sous forme de grille à l'aide du style *display: grid*. Probablement que l'utilisation de *flexbox* aurait été préférable, mais puisque nous ne l'avons vu que rapidement au dernier cours, j'ai préféré ne pas l'intégrer puisque cela m'aurait demandé de revoir à nouveau l'ensemble du code. J'explorerai toutefois sûrement cette option dans le futur.

Quant à l'intégration de Javascript, j'ai opté en premier lieu pour des boutons permettant d'ouvrir et de fermer toutes les sections *details* d'un seul clic en adaptant des lignes de code trouvées sur le web (en indiquant les sources dans mon script bien sûr). J'ai aussi adapté du code pour cacher l'en-tête quand on navigue vers le bas et la faire réapparaître quand on remonte, et ajouté des boutons qui modifient certaines propriétés du CSS pour que l'utilisateur puisse choisir le nombre de colonnes qui lui convient, car j'ai remarqué que le fait d'utiliser des grosseurs de caractères en *vw* fait en sorte que l'usager ne peut pas grossir le texte à sa guise.

## Obstacles du *responsive*

Le plus grand défi rencontré fût probablement d'assurer que le contenu s'ajuste correctement à la taille de la fenêtre. J'ai d'abord préparé mes styles en fonction d'une grille en trois colonnes, puis, à l'aide de boutons et d'un peu de Javascript, permis de changer le nombre de colonnes en modifiant le ratio et autres paramètres. Il me reste encore du travail à faire sur cet aspect pour que tout fonctionne correctement sans compliquer mon code inutilement.

## La suite...

Ma page n'est évidemment pas complétée dans son entièreté. Je me suis contentée, pour l'instant, d'intégrer qu'une partie des contenus de mon site web original.

Il me restera à corriger les points suivants pour lesquels j'ai manqué de temps :

- Reconnaître automatiquement la largeur de l'écran et appliquer le bon nombre de colonnes dès le départ.
- Ajuster les éléments de l'en-tête un par-dessus l'autre sur les écrans plus étroits.
- Problème avec l'animation de l'en-tête qui semble s'inverser quand je teste sur mon iPhone et iPad.
- Problème de grosseur de caractères de certains blocs sur iPhone et iPad.