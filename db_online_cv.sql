DROP TABLE IF EXISTS tb_interests;

CREATE TABLE `tb_interests` (
  `id_interest` varchar(64) NOT NULL,
  `interest_name` varchar(64) NOT NULL,
  `user_id` varchar(64) NOT NULL,
  PRIMARY KEY (`id_interest`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO tb_interests VALUES("1","Programming","1"),
("2","Travelling","1"),
("3","Music","1"),
("4","Movie","1");



DROP TABLE IF EXISTS tb_languages;

CREATE TABLE `tb_languages` (
  `id_language` varchar(64) NOT NULL,
  `language_name` varchar(64) NOT NULL,
  `language_star` float NOT NULL,
  `user_id` varchar(64) NOT NULL,
  `is_active` tinyint(4) NOT NULL,
  PRIMARY KEY (`id_language`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO tb_languages VALUES("1","Indonesia","5","1","1"),
("2","English","3","1","1"),
("3","Japanese","2.5","1","1");



DROP TABLE IF EXISTS tb_projects;

CREATE TABLE `tb_projects` (
  `id_project` int(11) NOT NULL,
  `project_title` varchar(255) NOT NULL,
  `project_headline` varchar(255) NOT NULL,
  `project_description_id` text NOT NULL,
  `project_description_en` text NOT NULL,
  `project_link` text NOT NULL,
  `project_image` text NOT NULL,
  `date_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user_id` varchar(64) NOT NULL,
  PRIMARY KEY (`id_project`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO tb_projects VALUES("1","Customer Point Admin Panel - For PT. IS Ing Silver","PHP Native, JavaScript, AJAX, JQuery, Bootstrap 3, MySQL","Customer Point Admin Panel adalah sebuah panel admin yang digunakan untuk manajemen poin yang dimiliki oleh pelanggan dari PT. IS Ing Silver, meliputi fungsi melihat daftar pelanggan, menambahkan user admin, menambahkan transaksi poin baru yang terintegrasi dengan sistem email, dan lain-lain. Dibuat menggunakan: bahasa pemrograman PHP Native, JavaScript, AJAX, JQuery, Bootstrap 3, dan RDBMS MySQL.","Customer Points Admin Panel is an admin panel that is used to manage points owned by customers of PT. IS Ing Silver includes functions of viewing customer lists, adding admin users, adding new transaction points that are integrated with the email system, and others. Built with: PHP Native, JavaScript, AJAX, JQuery, Bootstrap 3, and MySQL RDBMS.","https://adminpoin.ingsilver.co.id/","x","2021-11-13 02:00:07","1"),
("2","Leave Management System","PHP, CodeIgniter 3, JavaScript, JQuery, Bootstrap 4, MySQL","Leave Management System adalah aplikasi management cuti berbasis web yang digunakan untuk membuat pengajuan cuti, melihat history cuti dan sisa cuti, dan juga sebagai tempat untuk mengumumkan acara-acara perusahaan. Dibuat menggunakan: PHP, CodeIgniter 3, JavaScript, JQuery, Bootstrap 4, dan MySQL","Leave Management System is a web-based leave management application that is used to make leave applications, view leave history and remaining paid leave, and also as a place to announce company events. Built with: PHP, CodeIgniter 3, JavaScript, JQuery, Bootstrap 4, and MySQL","https://github.com/heathscliff334/AplikasiCutiCI-MySQL","x","2021-11-23 07:39:36","1"),
("3","Python Payroll System","Flask, Python, HTML, Bootstrap 3, JavaScript, MySQL","Payroll System Web-Based adalah sebuah aplikasi sistem penggajian berbasis web. Aplikasi ini adalah sebuah project yang dibuat untuk menyelesaikan tugas kuliah. Dibuat menggunakan: Flask, Python, HTML, Bootstrap 3, JavaScript, dan MySQL","Payroll System Web-Based is a web-based payroll system application. This application is a project that was created to complete a college assignment. Built using: Flask, Python, HTML, Bootstrap 3, JavaScript, and MySQL","https://github.com/heathscliff334/WebPayroll_PythonMySQL","x","2021-11-23 07:45:58","1"),
("4","Company Profile - For PT. IS Ing Silver Customers","PHP, CodeIgniter 3, JavaScript, AJAX, JQuery, Bootstrap 4, MySQL","Profil perusahaan ini adalah sebuah website yang dibuat untuk PT. IS Ing Silver, yang bertujuan untuk memberikan gambaran tentang bisnis perusahaan kepada target audiens, sehingga audiens tahu layanan apa yang ditawarkan perusahaan. Dibuat menggunakan: PHP, framework CodeIgniter 3, JavaScript, AJAX, JQuery, Bootstrap 4, dan RDBMS MySQL.","This company profile is a website created for PT. IS Ing Silver, which aims to provide an overview of the company\'s business to the target audience, so that the audience knows what services the company offers. Built with: PHP, CodeIgniter 3 framework, JavaScript, AJAX, JQuery, Bootstrap 4, and MySQL RDBMS.","https://ingsilver.co.id/","x","2021-11-13 01:59:11","1"),
("5","Japanese (Hiragana - Katakana) Flash Card","PHP, CodeIgniter 3, JavaScript, AJAX, JQuery, Bootstrap 4, MySQL","Japanese (Hiragana - Katakana) Flash Card adalah sebuah aplikasi berbasis web yang dibuat dengan tujuan untuk membantu mereka yang ingin belajar bahasa Jepang dengan sistem kartu flash yang memunculkan huruf hiragana atau katakana. Dibuat menggunakan: PHP, CodeIgniter 3, JavaScript, AJAX, JQuery, Bootstrap 4, dan RDBMS MySQL","Japanese (Hiragana - Katakana) Flash Card is a web-based application. Created with the aim of helping those who want to learn Japanese with a flashcard system that generates hiragana or katakana characters. Built using: PHP, CodeIgniter 3, JavaScript, AJAX, JQuery, Bootstrap 4, and MySQL RDBMS","https://flashcardjp.com/","x","2021-11-13 02:02:30","1"),
("6","Customer Invitation Form - For PT. IS Ing Silver Customers","PHP, CodeIgniter 4, JavaScript, JQuery, Bootstrap 4, MySQL","Customer Invitation Form adalah sebuah aplikasi berbasis web yang digunakan untuk pengisian formulir pendaftaran user baru pada aplikasi Point IS yang dimiliki oleh PT. IS Ing Silver. Dibuat menggunakan: PHP, CodeIgniter 4, JavaScript, JQuery, Bootstrap 4. dan RDBMS MySQL.","The Customer Invitation Form is a web-based application that is used to fill in the new user registration form on the Point IS application owned by PT. IS Ing Silver. Built with: PHP, CodeIgniter 4, JavaScript, JQuery, Bootstrap 4. and MySQL RDBMS.","https://point-is.ingsilver.co.id/","x","2021-11-13 02:01:22","1"),
("7","Point IS - For PT. IS Ing Silver Customers","Dart, Flutter, RESTful API, PHP, MySQL","Point IS ditujukan untuk pelanggan PT. IS Ing Silver. Pelanggan dapat melihat transaksi yang telah dilakukan, history dari point, dan dapat melakukan beberapa perubahan pada profil. Dibuat menggunakan: Dart, Framework Flutter, RESTful API dengan menggunakan PHP, dan RDBMS MySQL.","The point IS app is provided to the customers of PT. IS Ing Silver. Customers can view their transaction, point history, and do some changes in their profile. Built with: Dart, Flutter Framework, RESTful API using PHP, and MySQL RDBMS.","https://play.google.com/store/apps/details?id=com.ingsilver.is_poin&utm_source=ingsilver&utm_medium=is+poin+app&utm_campaign=is_poin","x","2021-09-08 17:00:00","1"),
("8","Instagram Clone UI","Dart, Flutter, RESTful API","Instagram Clone UI adalah sebuah aplikasi mobile yang dibuat dengan UI yang menyerupai aplikasi aslinya (Instagram). Dibuat menggunakan: Dart, Flutter, dan RESTful API","Instagram Clone UI is a mobile application made with a UI that is similar to the original application (Instagram). Built with: Dart, Flutter, and RESTful API","https://github.com/heathscliff334/instagram_clone_ui","x","2021-11-23 07:50:22","1"),
("9","WhatsApp Clone UI","Dart, Flutter, RESTful API","WhatsApp Clone UI adalah sebuah aplikasi mobile yang dibuat dengan UI yang menyerupai aplikasi aslinya (WhatsApp). Dibuat menggunakan: Dart, Flutter, dan RESTful API","WhatsApp Clone UI is a mobile application made with a UI that is similar to the original application (WhatsApp). Built with: Dart, Flutter, and RESTful API","https://github.com/heathscliff334/whatsapp_clone_ui","x","2021-11-23 07:52:16","1"),
("10","Online CV and Porfolio (Flutter Web)","Dart, Flutter, RESTful API, NodeJS, JavaScript, MySQL","Online CV and Porfolio adalah sebuah aplikasi yang menampilkan CV dan Portfolio yang berbasis web. Pada page skills dibuat dengan sistem rating bintang agar dapat dengan mudah memberikan gambaran mengenai keahlian-keahlian dari user. Dibuat menggunakan: Dart, Flutter, RESTful API, NodeJS, JavaScript, dan MySQL","Online CV and Portfolio is an application that shows a web-based CV and Portfolio. The skills page is made with a star rating system so other people can easily know an overview of the user\'s skills. Built with: Dart, Flutter, RESTful API, NodeJS, JavaScript, and MySQL","https://laurenscodes.space/","x","2021-11-23 08:00:36","1");



DROP TABLE IF EXISTS tb_skills;

CREATE TABLE `tb_skills` (
  `id_skill` int(11) NOT NULL,
  `skill_name` varchar(64) NOT NULL,
  `skill_star` float NOT NULL,
  `user_id` int(64) NOT NULL,
  PRIMARY KEY (`id_skill`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO tb_skills VALUES("1","Flutter","3.5","1"),
("2","Java","3","1"),
("3","PHP","4","1"),
("4","CodeIgniter","3.5","1"),
("5","HTML","4","1"),
("6","CSS","3.5","1"),
("7","JavaScript","4","1"),
("8","NodeJS","2.5","1"),
("9","Python","2","1"),
("10","SQL Server","4","1"),
("11","MySQL","4","1"),
("12","REST API","4","1"),
("13","Cubit","3","1"),
("14","Cloud VPS","3.5","1"),
("15","Docker","2","1"),
("16","Pascal","3","1"),
("17","AWS","2","1");



DROP TABLE IF EXISTS tb_users;

CREATE TABLE `tb_users` (
  `id_user` varchar(64) NOT NULL,
  `username` varchar(64) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `birthday` date NOT NULL,
  `headline` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `date_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_login` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `is_active` tinyint(4) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id_user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO tb_users VALUES("1","heathscliff","$2y$10$6Szfdngo6rh6StfgSxmsv.MFAhfnD04bv7xFeG9l7X8ezde8Ci5ra","heathscliff334@gmail.com","Kevin Laurence Hartono","1997-08-25","Flutter Dev. Full Stack. Back-End.","Experienced IT Staff with a demonstrated history of working in the retail industry. Skilled in Full Stack, Mobile Development (Flutter & Java), Web Development, and Computer Networking. Strong professional with a Bachelor\'s degree focused in Information Technology from Bunda Mulia University.","2021-10-22 07:25:01","2021-10-22 07:25:01","1");



