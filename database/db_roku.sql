-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Mar 13, 2021 at 04:42 AM
-- Server version: 5.7.31
-- PHP Version: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_roku`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_movies`
--

DROP TABLE IF EXISTS `tbl_movies`;
CREATE TABLE IF NOT EXISTS `tbl_movies` (
  `movies_id` mediumint(8) NOT NULL AUTO_INCREMENT,
  `movies_title` varchar(80) NOT NULL,
  `movies_year` varchar(5) NOT NULL,
  `movies_rating` varchar(5) NOT NULL,
  `movies_director` varchar(80) NOT NULL,
  `movies_cast` varchar(350) NOT NULL,
  `movies_comments` text NOT NULL,
  `movies_desc` text NOT NULL,
  `movies_genre` varchar(125) NOT NULL,
  `movies_arating` varchar(15) NOT NULL,
  `movies_runtime` varchar(25) NOT NULL,
  `movies_thumbnail` varchar(80) NOT NULL,
  `movies_media` varchar(80) NOT NULL,
  `movies_section` varchar(25) NOT NULL,
  `movies_cover` varchar(80) NOT NULL,
  PRIMARY KEY (`movies_id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_movies`
--

INSERT INTO `tbl_movies` (`movies_id`, `movies_title`, `movies_year`, `movies_rating`, `movies_director`, `movies_cast`, `movies_comments`, `movies_desc`, `movies_genre`, `movies_arating`, `movies_runtime`, `movies_thumbnail`, `movies_media`, `movies_section`, `movies_cover`) VALUES
(1, 'All About Eve', '1950', '8.2', 'Joseph L. Mankiewicz', 'Bette Davis, Anne Baxter, George Sanders, Celeste Holm', '', 'Margo, an established theatre actress, appoints Eve, an aspiring actress, as her personal assistant. However, Margo is unaware of Eve\'s intention to take over her career.', 'Drama', 'PG', '2h 18m', 'eve_thumbnail.jpg', 'https://youtu.be/LSntQerk8cQ', 'parents', 'eve_cover.jpg'),
(2, 'Lady and the Tramp', '1955', '7.3', 'Hamilton Luske, Wilfred Jackson, Clyde Geronimi', 'Peggy Lee, Barbara Luddy, Larry Roberts, Bill Thompson', '', 'Lady, a female dog, feels neglected when Jim and Darling get a baby in the house. Later, when Aunt Sarah gets her twin Siamese cats, Lady is blamed for all the havoc they wreak.', 'Animation, Adventure, Comedy ', 'G', '1h 16m', 'tramp_thumbnail.jpg', 'https://youtu.be/kbEIpQwUdSQ', 'kids', 'tramp_cover.jpg'),
(3, 'Breakfast at Tiffany\'s', '1961', '7.6', 'Blake Edwards', 'Audrey Hepburn, George Peppard, Patricia Neal', '', 'Paul is a struggling writer who recently moves into a new apartment in New York. When he meets Holly, an eccentric but beautiful socialite, he hopelessly falls in love with her.', 'Comedy, Drama, Romance', 'PG', '1h 55m', 'tiffany_thumbnail.jpg', 'https://youtu.be/OPQkbvo99Ug', 'parents', 'tiffany_cover.jpg'),
(4, 'Mary Poppins', '1964', '7.8', 'Robert Stevenson', 'Julie Andrews, Dick Van Dyke, David Tomlinson', '', 'Mr Banks is looking for a nanny for his two mischievous children and comes across Mary Poppins, an angelic nanny. She not only brings a change in their lives but also spreads happiness.', 'Comedy, Family, Fantasy ', 'G', '2h 19m', 'mary_thumbnail.jpg', 'https://youtu.be/YfkEQDPlb8g', 'kids', 'mary_cover.jpg'),
(5, 'Jaws', '1975', '8.0', 'Steven Spielberg', 'Roy Scheider, Robert Shaw, Richard Dreyfuss', '', 'A police chief, a marine scientist and a fisherman spring into action after a white shark terrorizes the inhabitants of Amity, a quiet island.', 'Adventure, Thriller ', 'PG', '2h 4m', 'jaws_thumbnail.jpg', 'https://youtu.be/4pxkU9GVAoA', 'parents', 'jaws_cover.jpg'),
(6, 'Willy Wonka & the Chocolate Factory', '1971', '7.8', 'Mel Stuart', 'Gene Wilder, Jack Albertson, Peter Ostrum', '', 'A factory owner gives 5 children a chance to win a lifetime supply of sweets. Charlie, along with four odious children enter the factory. Disasters befall each of the children. Will Charlie survive?', 'Family, Fantasy, Musical', 'G', '1h 40m', 'willy_thumbnail.jpg', 'https://youtu.be/2cBja3AbahY', 'kids', 'willy_cover.jpg'),
(7, 'The Shining', '1980', '8.4', 'Stanley Kubrick', 'Jack Nicholson, Shelley Duvall, Danny Lloyd', '', 'Jack and his family move into an isolated hotel with a violent past. Living in isolation, Jack begins to lose his sanity, which affects his family members.', 'Drama, Horror', 'R', '2h 26m', 'shining_thumbnail.jpg', 'https://youtu.be/5Cb3ik6zP2I', 'parents', 'shining_cover.jpg'),
(8, 'My Neighbor Totoro', '1988', '8.2', 'Hayao Miyazaki', ' Hitoshi Takagi, Noriko Hidaka, Chika Sakamoto', '', 'Mei and Satsuki shift to a new house to be closer to their mother who is in the hospital. They soon become friends with Totoro, a giant rabbit-like creature who is a spirit.', 'Animation, Family, Fantasy ', 'G', '1h 26m', 'totoro_thumbnail.jpg', 'https://youtu.be/WJC1qciW_3k', 'kids', 'totoro_cover.jpg'),
(9, 'Pulp Fiction', '1994', '8.9', 'Quentin Tarantino', 'John Travolta, Uma Thurman, Samuel L. Jackson', '', 'In the realm of underworld, a series of incidents intertwines the lives of two Los Angeles mobsters, a gangster\'s wife, a boxer and two small-time criminals.', 'Crime, Drama', 'R', '2h 34m', 'pulp_thumbnail.jpg', 'https://youtu.be/tGpTpVyI_OQ', 'parents', 'pulp_cover.jpg'),
(10, 'James and the Giant Peach', '1996', '6.7', 'Henry Selick', 'Paul Terry, Joanna Lumley, Pete Postlethwaite', '', 'An orphaned boy drops magical crocodile tongues which later grow into a never-ending peach tree. He finds his new family which are six insects that help him on his adventure.', 'Animation, Adventure, Family', 'PG', '1h 19min', 'james_thumbnail.jpg', 'https://youtu.be/xCWGg9dCEUU', 'kids', 'james_cover.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_music`
--

DROP TABLE IF EXISTS `tbl_music`;
CREATE TABLE IF NOT EXISTS `tbl_music` (
  `music_id` mediumint(8) NOT NULL AUTO_INCREMENT,
  `music_title` varchar(80) NOT NULL,
  `music_singer` varchar(80) NOT NULL,
  `music_year` varchar(5) NOT NULL,
  `music_comments` text NOT NULL,
  `music_thumbnail` varchar(80) NOT NULL,
  `music_genre` varchar(125) NOT NULL,
  `music_album` varchar(80) NOT NULL,
  `music_likes` varchar(5) NOT NULL,
  `music_section` varchar(25) NOT NULL,
  `music_media` varchar(80) NOT NULL,
  PRIMARY KEY (`music_id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_music`
--

INSERT INTO `tbl_music` (`music_id`, `music_title`, `music_singer`, `music_year`, `music_comments`, `music_thumbnail`, `music_genre`, `music_album`, `music_likes`, `music_section`, `music_media`) VALUES
(1, 'Fever', 'Peggy Lee', '1958', '', 'fever_thumbnail.jpg', 'Jazz', 'Things Are Swingin\'', '346k', 'parents', 'fever.mp3'),
(2, 'The Chipmunk Song (Christmas Don\'t Be Late)', 'Alvin and the Chipmunks and David Seville', '1958', '', 'chipmunks_thumbnail.jpg', 'Pop', 'Let\'s All Sing with The Chipmunks', '13k', 'kids', 'chipmunks.mp3'),
(3, 'Can\'t Help Falling in Love', 'Elvis Presley', '1961', '', 'love_thumbnail.jpg', 'Pop', 'Blue Hawaii', '2.4m', 'parents', 'love.mp3'),
(4, 'Sugar, Sugar', 'The Archies', '1969', '', 'sugar_thumbnail.jpg', 'Pop', 'Everything\'s Archie', '350k', 'kids', 'sugar.mp3'),
(5, 'Too Much Heaven', 'Bee Gees', '1978', '', 'heaven_thumbnail.jpg', 'R&B, Soul', 'Spirits Having Flown', '271k', 'parents', 'heaven.mp3'),
(6, 'ABC', 'The Jackson 5', '1970', '', 'abc_thumbnail.jpg', 'Soul, Disco', 'ABC', '48k', 'kids', 'abc.mp3'),
(7, 'Welcome to the Jungle', 'Guns N\' Roses', '1988', '', 'jungle_thumbnail.jpg', 'Rock, Metal', 'Appetite for Destruction', '2.1m', 'parents', 'jungle.mp3'),
(8, 'Ghostbusters', 'Ray Parker Jr.', '1984', '', 'ghost_thumbnail.jpg', 'Dance, Pop', 'Ghostbusters: Original Soundtrack Album', '1m', 'kids', 'ghost.mp3'),
(9, 'Intergalactic', 'Beastie Boys', '1998', '', 'inter_thumbnail.jpg', 'Hip-hop', 'Hello Nasty', '406k', 'parents', 'inter.mp3'),
(10, 'Jump', 'Kris Kross', '1992', '', 'jump_thumbnail.jpg', 'Hip-hop', 'Totally Krossed Out', '873k', 'kids', 'jump.mp3');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_tv`
--

DROP TABLE IF EXISTS `tbl_tv`;
CREATE TABLE IF NOT EXISTS `tbl_tv` (
  `tv_id` mediumint(8) NOT NULL AUTO_INCREMENT,
  `tv_title` varchar(80) NOT NULL,
  `tv_year` varchar(30) NOT NULL,
  `tv_rating` varchar(5) NOT NULL,
  `tv_director` varchar(80) NOT NULL,
  `tv_cast` varchar(350) NOT NULL,
  `tv_comments` text NOT NULL,
  `tv_desc` text NOT NULL,
  `tv_genre` varchar(125) NOT NULL,
  `tv_arating` varchar(125) NOT NULL,
  `tv_runtime` varchar(25) NOT NULL,
  `tv_thumbnail` varchar(80) NOT NULL,
  `tv_media` varchar(80) NOT NULL,
  `tv_section` varchar(25) NOT NULL,
  `tv_cover` varchar(80) NOT NULL,
  PRIMARY KEY (`tv_id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_tv`
--

INSERT INTO `tbl_tv` (`tv_id`, `tv_title`, `tv_year`, `tv_rating`, `tv_director`, `tv_cast`, `tv_comments`, `tv_desc`, `tv_genre`, `tv_arating`, `tv_runtime`, `tv_thumbnail`, `tv_media`, `tv_section`, `tv_cover`) VALUES
(1, 'I Love Lucy', 'TV Series (1951–1957)', '8.4', 'William Asher, Marc Daniels\r\n', 'Lucille Ball, Desi Arnaz, Vivian Vance', '', 'Naive and ambitious but lacking the skill, Lucy\'s relentless efforts to get into showbiz often lands herself and her husband into trouble.Her neighbours and friends also get entangled in her antics.', 'Comedy, Family', 'TV-G', '30m', 'lucy_thumbnail.jpg', 'https://youtu.be/gO7HicngsLw', 'parents', 'lucy_cover.jpg'),
(2, 'The Huckleberry Hound Show', 'TV Series (1951–1957)', '6.6', 'William Hanna, Joseph Barbera\r\n\r\n', 'Daws Butler, Don Messick, Doug Young', '', 'The adventures of a blue dog with a southern accent.', 'Animation, Comedy, Family', 'TV-G', '30m', 'hound_thumbnail.jpg', 'https://youtu.be/jjGD1nFdhgU', 'kids', 'hound_cover.jpg'),
(3, 'Star Trek: The Original Series', 'TV Series (1966–1969)', '8.3', 'Gene Roddenberry', 'William Shatner, Leonard Nimoy, DeForest Kelley', '', 'James T Kirk, who is the captain of the Starship Enterprise, explores the whole galaxy with his crew and goes on several adventures as they fight evil forces together.', 'Action, Adventure, Sci-Fi', 'TV-PG', '50m', 'trek_thumbnail.jpg', 'https://youtu.be/nPDb5wX4H7I', 'parents', 'trek_cover.jpg'),
(4, 'Scooby Doo, Where Are You!', 'TV Series (1969–1970)', '7.9', 'Joe Ruby, Ken Spears, Joseph Barbera', 'Don Messick, Casey Kasem, Nicole Jaffe', '', 'Brainiac Velma, jock Fred, fashionista Daphne, hippie Shaggy, and Shaggy\'s highstrung, talking Great Dane, Scooby-Doo, climb into their green van, the Mystery Machine, and hit the road in search of weird phenomena to solve. And even when Scooby and the gang aren\'t actively searching for them, mysteries just have a way of falling into their laps. Ruh-roh!', 'Animation, Adventure, Comedy ', '7.9', '22m', 'scooby_thumbnail.jpg', 'https://youtu.be/7s_Pi1GWqMM', 'kids', 'scooby_cover.jpg'),
(5, 'Welcome Back, Kotter', 'TV Series (1975–1979)', '7.0', 'Gabe Kaplan, Alan Sacks, Peter Meyerson', 'Gabe Kaplan, Ron Palillo, John Travolta', '', 'Gabe Kotter returns to his old high school this time as a teacher. He\'s put in charge of a class full of unruly remedial students called the Sweathogs. They\'re a bunch of wisecracking, underachieving and incorrigible students, and it takes all of Mr. Kotter\'s humor and experience as a former Sweathog himself to deal with his class.', 'Comedy', 'TV-PG', '30m', 'kotter_thumbnail.jpg', 'https://youtu.be/a3_QlasXQWY', 'parents', 'kotter_cover.jpg'),
(6, 'The Muppet Show ', 'TV Series (1976–1981)', '8.4', 'Jim Henson, Jack Burns', 'Jim Henson, Frank Oz, Richard Hunt', '', 'A fantastic medley of sweet and mischievous, Jim Henson\'s Muppets, including Kermit the Frog and Miss Piggy, produce a weekly variety show with a range of famous guests. Along for the ride are Gonzo, Fozzie the bear and Scooter - who is the closest thing to a human puppet this series has.', 'Comedy, Family, Music', 'TV-G', '30m', 'muppet_thumbnail.jpg', 'https://youtu.be/NBE0O0SR7wY', 'kids', 'muppet_cover.jpg'),
(7, 'The Joy of Painting', 'TV Series (1983–1994)', '9.4', 'Bob Ross', 'Bob Ross, Steve Ross, Dana Jester', '', 'American painter Bob Ross offers soothing words of encouragement to viewers and painting hobbyists in an enormously popular series that has captivated audiences worldwide.', 'Documentary, Family', 'TV-G', '30m', 'painting_thumbnail.jpg', 'https://youtu.be/gqdzXNsL_2o', 'parents', 'painting_cover.jpg'),
(8, 'Thundarr the Barbarian', 'TV Series (1980–1981)', '7.5', 'Steve Gerber', 'Henry Corden, Robert Ridgely, Nellie Bellflower', '', 'Thundarr the Barbarian and his companions Ookla the Mok and Princess Ariel wander a devastated future Earth and fight evil wherever they find it.', 'Animation, Adventure, Family', 'TV-Y7 ', '30m', 'thundarr_thumbnail.jpg', 'https://youtu.be/4I9blXQEHyw', 'kids', 'thundarr_cover.jpg'),
(9, 'Friends', 'TV Series (1994–2004)', '8.9', 'David Crane, Marta Kauffman', 'Jennifer Aniston, Courteney Cox, Lisa Kudrow, Matt LeBlanc, Matthew Perry, David Schwimmer', '', 'Follow the lives of six reckless adults living in Manhattan, as they indulge in adventures which make their lives both troublesome and happening.', 'Comedy, Romance', 'TV-PG', '22m', 'friends_thumbnail.jpg', 'https://youtu.be/ggZkZK-9Pm4', 'parents', 'friends_cover.jpg'),
(10, 'Johnny Bravo', 'TV Series (1997–2004)', '7.2', 'Van Partible, Jed Spingarn, Butch Hartman', 'Jeff Bennett, Brenda Vaccaro, Mae Whitman', '', 'Johnny Bravo has no shortage of confidence, and he\'s certain that all women want him. With his big hair and tight black clothes, he\'s known for his karate chops, accompanied by the sound of a bullwhip.', 'Animation, Adventure, Comedy', 'TV-Y7', '30m', 'johnny_thumbnail.jpg', 'https://youtu.be/WhtpBCeOvEo', 'kids', 'johnny_cover.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

DROP TABLE IF EXISTS `tbl_user`;
CREATE TABLE IF NOT EXISTS `tbl_user` (
  `user_id` smallint(8) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(30) NOT NULL,
  `user_pass` varchar(30) NOT NULL,
  `user_parents` varchar(30) NOT NULL,
  `user_kids` varchar(30) NOT NULL,
  `parents_img` varchar(80) NOT NULL,
  `kids_img` varchar(80) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`user_id`, `user_name`, `user_pass`, `user_parents`, `user_kids`, `parents_img`, `kids_img`) VALUES
(1, 'evanchan', 'evanchan', 'Parent Evan', 'Baby Jihee', 'evan.jpg', 'jihee.jpg');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
