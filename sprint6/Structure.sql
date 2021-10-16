CREATE DATABASE  IF NOT EXISTS `proyectoDH` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `proyectoDH`;

DROP TABLE IF EXISTS `usertype`;
create table `userType` (
	`type_id` INT,
	`nameType` VARCHAR(6),
    PRIMARY KEY (`type_id`)
);
insert into `userType` (type_id, nameType) values (1, 'buyer');
insert into `userType` (type_id, nameType) values (2, 'seller');
insert into `userType` (type_id, nameType) values (3, 'admin');

DROP TABLE IF EXISTS `categories`;
create table categories (
	`category_id` INT,
	`status` VARCHAR (4),
     PRIMARY KEY (`category_id`)
);
insert into categories (category_id, status) values (1, 'sale');
insert into categories (category_id, status) values (2, 'rent');

DROP TABLE IF EXISTS `products`;
create table products (
	product_id INT NOT NULL AUTO_INCREMENT,
	image VARCHAR(50),
	category_id INT,
	price VARCHAR(50),
	description  TEXT,
	location VARCHAR(50),
	sqft DECIMAL(6,1),
	floors INT,
	beds INT,
	baths INT,
    PRIMARY KEY (`product_id`),
    FOREIGN KEY (`category_id`) REFERENCES categories(category_id)
);
insert into products (product_id, image, category_id, price, description , location, sqft, floors, beds, baths) values (1, 'http://dummyimage.com/101x100.png/cc0000/ffffff', 1, '$273915.69', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', '1160 Lerdahl Point', 1019.7, 1, 7, 5);
insert into products (product_id, image, category_id, price, description , location, sqft, floors, beds, baths) values (2, 'http://dummyimage.com/246x100.png/cc0000/ffffff', 2, '$240766.04', 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.

Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', '531 Graedel Plaza', 8816.8, 1, 2, 4);
insert into products (product_id, image, category_id, price, description , location, sqft, floors, beds, baths) values (3, 'http://dummyimage.com/111x100.png/dddddd/000000', 1, '$284434.45', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.', '85 Fairfield Trail', 6367.2, 3, 1, 2);
insert into products (product_id, image, category_id, price, description , location, sqft, floors, beds, baths) values (4, 'http://dummyimage.com/135x100.png/cc0000/ffffff', 2, '$160252.64', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', '00 Almo Court', 5804.1, 2, 4, 6);
insert into products (product_id, image, category_id, price, description , location, sqft, floors, beds, baths) values (5, 'http://dummyimage.com/167x100.png/dddddd/000000', 2, '$479573.58', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', '7056 Fairfield Lane', 1186.5, 3, 7, 3);
insert into products (product_id, image, category_id, price, description , location, sqft, floors, beds, baths) values (6, 'http://dummyimage.com/200x100.png/dddddd/000000', 2, '$321885.56', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.', '727 Mayer Terrace', 6666.9, 1, 5, 6);
insert into products (product_id, image, category_id, price, description , location, sqft, floors, beds, baths) values (7, 'http://dummyimage.com/210x100.png/dddddd/000000', 2, '$381559.73', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', '6 Jana Center', 9388.5, 1, 6, 1);
insert into products (product_id, image, category_id, price, description , location, sqft, floors, beds, baths) values (8, 'http://dummyimage.com/193x100.png/cc0000/ffffff', 2, '$343735.86', 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', '5690 Lake View Court', 3512.0, 1, 7, 5);
insert into products (product_id, image, category_id, price, description , location, sqft, floors, beds, baths) values (9, 'http://dummyimage.com/132x100.png/5fa2dd/ffffff', 2, '$245458.47', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', '7 8th Parkway', 2920.2, 1, 2, 5);
insert into products (product_id, image, category_id, price, description , location, sqft, floors, beds, baths) values (10, 'http://dummyimage.com/108x100.png/5fa2dd/ffffff', 1, '$148590.67', 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.

Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', '79 Novick Street', 4472.3, 2, 6, 2);
insert into products (product_id, image, category_id, price, description , location, sqft, floors, beds, baths) values (11, 'http://dummyimage.com/237x100.png/cc0000/ffffff', 1, '$311946.10', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', '00 Caliangt Crossing', 1509.7, 1, 6, 5);
insert into products (product_id, image, category_id, price, description , location, sqft, floors, beds, baths) values (12, 'http://dummyimage.com/144x100.png/5fa2dd/ffffff', 1, '$145957.45', 'Phasellus in felis. Donec semper sapien a libero. Nam dui.

Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', '9903 Comanche Pass', 6561.4, 2, 1, 5);
insert into products (product_id, image, category_id, price, description , location, sqft, floors, beds, baths) values (13, 'http://dummyimage.com/208x100.png/cc0000/ffffff', 2, '$277501.56', 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.', '51 Westridge Drive', 2816.2, 3, 3, 5);
insert into products (product_id, image, category_id, price, description , location, sqft, floors, beds, baths) values (14, 'http://dummyimage.com/186x100.png/cc0000/ffffff', 2, '$349523.09', 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.

Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.', '7043 Paget Hill', 5707.7, 2, 4, 4);
insert into products (product_id, image, category_id, price, description , location, sqft, floors, beds, baths) values (15, 'http://dummyimage.com/225x100.png/5fa2dd/ffffff', 2, '$157389.44', 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', '18606 Hovde Avenue', 3795.9, 1, 3, 4);
insert into products (product_id, image, category_id, price, description , location, sqft, floors, beds, baths) values (16, 'http://dummyimage.com/198x100.png/5fa2dd/ffffff', 1, '$135770.77', 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', '852 Upham Road', 9159.4, 2, 5, 2);
insert into products (product_id, image, category_id, price, description , location, sqft, floors, beds, baths) values (17, 'http://dummyimage.com/150x100.png/ff4444/ffffff', 2, '$499052.61', 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.', '36 Everett Circle', 7298.9, 1, 3, 3);
insert into products (product_id, image, category_id, price, description , location, sqft, floors, beds, baths) values (18, 'http://dummyimage.com/189x100.png/cc0000/ffffff', 2, '$400664.77', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', '0449 Debra Plaza', 7305.6, 2, 5, 5);
insert into products (product_id, image, category_id, price, description , location, sqft, floors, beds, baths) values (19, 'http://dummyimage.com/156x100.png/ff4444/ffffff', 2, '$349432.13', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', '39138 Valley Edge Circle', 8656.4, 1, 2, 7);
insert into products (product_id, image, category_id, price, description , location, sqft, floors, beds, baths) values (20, 'http://dummyimage.com/150x100.png/cc0000/ffffff', 1, '$175806.82', 'Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', '6 Little Fleur Junction', 7447.8, 2, 2, 4);
insert into products (product_id, image, category_id, price, description , location, sqft, floors, beds, baths) values (21, 'http://dummyimage.com/124x100.png/5fa2dd/ffffff', 2, '$181741.87', 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.', '7 Lunder Road', 5143.5, 2, 5, 4);
insert into products (product_id, image, category_id, price, description , location, sqft, floors, beds, baths) values (22, 'http://dummyimage.com/101x100.png/ff4444/ffffff', 1, '$131102.03', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', '66823 Donald Circle', 3321.7, 1, 2, 3);
insert into products (product_id, image, category_id, price, description , location, sqft, floors, beds, baths) values (23, 'http://dummyimage.com/210x100.png/ff4444/ffffff', 2, '$400724.16', 'Fusce consequat. Nulla nisl. Nunc nisl.

Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.', '96 Straubel Parkway', 3870.5, 2, 1, 7);
insert into products (product_id, image, category_id, price, description , location, sqft, floors, beds, baths) values (24, 'http://dummyimage.com/155x100.png/dddddd/000000', 1, '$458036.13', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.', '521 Graedel Point', 7708.1, 2, 1, 1);
insert into products (product_id, image, category_id, price, description , location, sqft, floors, beds, baths) values (25, 'http://dummyimage.com/174x100.png/cc0000/ffffff', 2, '$325326.26', 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.', '1046 Towne Plaza', 6123.5, 2, 7, 5);
insert into products (product_id, image, category_id, price, description , location, sqft, floors, beds, baths) values (26, 'http://dummyimage.com/233x100.png/5fa2dd/ffffff', 1, '$180054.82', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', '684 Annamark Park', 9182.5, 2, 5, 4);
insert into products (product_id, image, category_id, price, description , location, sqft, floors, beds, baths) values (27, 'http://dummyimage.com/133x100.png/5fa2dd/ffffff', 2, '$443135.83', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', '33 Hansons Point', 9334.5, 3, 5, 4);
insert into products (product_id, image, category_id, price, description , location, sqft, floors, beds, baths) values (28, 'http://dummyimage.com/178x100.png/5fa2dd/ffffff', 2, '$102428.97', 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.', '70056 Meadow Vale Lane', 8979.3, 1, 5, 1);
insert into products (product_id, image, category_id, price, description , location, sqft, floors, beds, baths) values (29, 'http://dummyimage.com/117x100.png/cc0000/ffffff', 2, '$330445.56', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.', '78 Derek Place', 3096.1, 3, 1, 3);
insert into products (product_id, image, category_id, price, description , location, sqft, floors, beds, baths) values (30, 'http://dummyimage.com/148x100.png/dddddd/000000', 2, '$270069.94', 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.

In congue. Etiam justo. Etiam pretium iaculis justo.', '480 Coleman Avenue', 4884.2, 1, 4, 3);
insert into products (product_id, image, category_id, price, description , location, sqft, floors, beds, baths) values (31, 'http://dummyimage.com/187x100.png/cc0000/ffffff', 1, '$431776.97', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.', '7 Scoville Drive', 8919.8, 3, 3, 7);
insert into products (product_id, image, category_id, price, description , location, sqft, floors, beds, baths) values (32, 'http://dummyimage.com/216x100.png/cc0000/ffffff', 2, '$181588.10', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', '95468 Bashford Terrace', 3964.1, 2, 4, 4);
insert into products (product_id, image, category_id, price, description , location, sqft, floors, beds, baths) values (33, 'http://dummyimage.com/225x100.png/5fa2dd/ffffff', 2, '$163494.52', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', '6 Mitchell Street', 9523.9, 3, 3, 6);
insert into products (product_id, image, category_id, price, description , location, sqft, floors, beds, baths) values (34, 'http://dummyimage.com/153x100.png/dddddd/000000', 2, '$296315.49', 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.

Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', '1637 Anniversary Court', 3596.5, 1, 2, 2);
insert into products (product_id, image, category_id, price, description , location, sqft, floors, beds, baths) values (35, 'http://dummyimage.com/128x100.png/ff4444/ffffff', 1, '$429219.41', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', '358 Debra Pass', 6661.5, 3, 4, 2);
insert into products (product_id, image, category_id, price, description , location, sqft, floors, beds, baths) values (36, 'http://dummyimage.com/106x100.png/5fa2dd/ffffff', 2, '$469413.49', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.', '8137 Morningstar Pass', 5228.8, 2, 7, 1);
insert into products (product_id, image, category_id, price, description , location, sqft, floors, beds, baths) values (37, 'http://dummyimage.com/241x100.png/ff4444/ffffff', 2, '$426564.32', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.', '86 Cody Circle', 8414.9, 2, 6, 1);
insert into products (product_id, image, category_id, price, description , location, sqft, floors, beds, baths) values (38, 'http://dummyimage.com/192x100.png/ff4444/ffffff', 2, '$377277.53', 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.', '83201 Forest Dale Drive', 3200.9, 1, 2, 5);
insert into products (product_id, image, category_id, price, description , location, sqft, floors, beds, baths) values (39, 'http://dummyimage.com/193x100.png/5fa2dd/ffffff', 1, '$485672.50', 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.', '6753 Susan Junction', 2140.7, 1, 4, 5);
insert into products (product_id, image, category_id, price, description , location, sqft, floors, beds, baths) values (40, 'http://dummyimage.com/241x100.png/ff4444/ffffff', 1, '$457174.04', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', '57 North Trail', 2692.0, 3, 3, 4);
insert into products (product_id, image, category_id, price, description , location, sqft, floors, beds, baths) values (41, 'http://dummyimage.com/102x100.png/ff4444/ffffff', 2, '$153027.12', 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.', '50 Fairview Circle', 2210.8, 3, 5, 6);
insert into products (product_id, image, category_id, price, description , location, sqft, floors, beds, baths) values (42, 'http://dummyimage.com/184x100.png/5fa2dd/ffffff', 1, '$343820.47', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', '139 Wayridge Parkway', 9597.3, 1, 6, 6);
insert into products (product_id, image, category_id, price, description , location, sqft, floors, beds, baths) values (43, 'http://dummyimage.com/134x100.png/5fa2dd/ffffff', 2, '$282970.78', 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.

Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.', '24357 Riverside Drive', 8875.0, 2, 5, 4);
insert into products (product_id, image, category_id, price, description , location, sqft, floors, beds, baths) values (44, 'http://dummyimage.com/135x100.png/5fa2dd/ffffff', 2, '$250392.81', 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.

Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.', '47819 Bartillon Court', 3229.3, 3, 2, 6);
insert into products (product_id, image, category_id, price, description , location, sqft, floors, beds, baths) values (45, 'http://dummyimage.com/124x100.png/ff4444/ffffff', 2, '$499029.63', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.', '2089 Old Gate Circle', 4479.9, 1, 4, 7);
insert into products (product_id, image, category_id, price, description , location, sqft, floors, beds, baths) values (46, 'http://dummyimage.com/107x100.png/5fa2dd/ffffff', 2, '$440763.77', 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.

Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.', '70 Hauk Place', 4336.9, 1, 5, 5);
insert into products (product_id, image, category_id, price, description , location, sqft, floors, beds, baths) values (47, 'http://dummyimage.com/220x100.png/dddddd/000000', 1, '$239934.02', 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.', '988 Jackson Point', 8317.0, 3, 5, 4);
insert into products (product_id, image, category_id, price, description , location, sqft, floors, beds, baths) values (48, 'http://dummyimage.com/202x100.png/5fa2dd/ffffff', 1, '$273435.25', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.', '2379 Mesta Plaza', 7782.9, 3, 5, 1);
insert into products (product_id, image, category_id, price, description , location, sqft, floors, beds, baths) values (49, 'http://dummyimage.com/178x100.png/cc0000/ffffff', 1, '$240384.34', 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.', '429 Hanover Circle', 5179.1, 3, 1, 3);
insert into products (product_id, image, category_id, price, description , location, sqft, floors, beds, baths) values (50, 'http://dummyimage.com/232x100.png/ff4444/ffffff', 2, '$161013.65', 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.

Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.', '26449 La Follette Place', 5696.1, 2, 5, 5);


DROP TABLE IF EXISTS `users`;
create table users (
	user_id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(50),
	lastName VARCHAR(50),
	email VARCHAR(50),
	password VARCHAR(200),
	photo VARCHAR(100),
	type_id INT,
    PRIMARY KEY (`user_id`),
    FOREIGN KEY (`type_id`) REFERENCES userType(type_id)
);
insert into users (user_id, name, lastName, email, password, photo, type_id) values (1, 'Ivory', 'Headly', 'iheadly0@vkontakte.ru', 'ENovtZKg6jvV', 'https://robohash.org/sedtemporibusexpedita.png?size=50x50&set=set1', 3);
insert into users (user_id, name, lastName, email, password, photo, type_id) values (2, 'Cross', 'Thomassin', 'cthomassin1@squidoo.com', 'vTVP9TjW', 'https://robohash.org/suntnequeest.png?size=50x50&set=set1', 3);
insert into users (user_id, name, lastName, email, password, photo, type_id) values (3, 'Bridget', 'Nutbeam', 'bnutbeam2@businessweek.com', 'Z9VzXcSfyh', 'https://robohash.org/autemesseenim.png?size=50x50&set=set1', 3);
insert into users (user_id, name, lastName, email, password, photo, type_id) values (4, 'Sampson', 'Ash', 'sash3@amazon.co.uk', 'k8vBnS6', 'https://robohash.org/rationedoloresesse.png?size=50x50&set=set1', 3);
insert into users (user_id, name, lastName, email, password, photo, type_id) values (5, 'Alvis', 'Ramalho', 'aramalho4@chicagotribune.com', 'n1mJgMwyuF3', 'https://robohash.org/providentdoloremrerum.png?size=50x50&set=set1', 1);
insert into users (user_id, name, lastName, email, password, photo, type_id) values (6, 'Chiquita', 'Iskov', 'ciskov5@lycos.com', '9MaFxsA', 'https://robohash.org/quiearerum.png?size=50x50&set=set1', 2);
insert into users (user_id, name, lastName, email, password, photo, type_id) values (7, 'Rodd', 'Paulo', 'rpaulo6@shinystat.com', 'L6ODNNNEgS', 'https://robohash.org/totamatqueanimi.png?size=50x50&set=set1', 2);
insert into users (user_id, name, lastName, email, password, photo, type_id) values (8, 'Findley', 'Duetsche', 'fduetsche7@privacy.gov.au', 'AMMyknr', 'https://robohash.org/praesentiumsuntmolestiae.png?size=50x50&set=set1', 3);
insert into users (user_id, name, lastName, email, password, photo, type_id) values (9, 'Darius', 'Buddles', 'dbuddles8@elegantthemes.com', 'NolK1m96LB', 'https://robohash.org/saepenoniusto.png?size=50x50&set=set1', 1);
insert into users (user_id, name, lastName, email, password, photo, type_id) values (10, 'Kenon', 'Kleiner', 'kkleiner9@so-net.ne.jp', 'M2XnQNP', 'https://robohash.org/etvoluptatesomnis.png?size=50x50&set=set1', 3);
insert into users (user_id, name, lastName, email, password, photo, type_id) values (11, 'Colas', 'Raspison', 'craspisona@ehow.com', 'BdO8CsX', 'https://robohash.org/mollitiaexcepturisint.png?size=50x50&set=set1', 1);
insert into users (user_id, name, lastName, email, password, photo, type_id) values (12, 'Fionna', 'Stoak', 'fstoakb@163.com', 'KpKccxkC', 'https://robohash.org/quasisedquo.png?size=50x50&set=set1', 2);
insert into users (user_id, name, lastName, email, password, photo, type_id) values (13, 'Findlay', 'Dils', 'fdilsc@imgur.com', '8aUAH9M', 'https://robohash.org/voluptatevoluptatibusipsam.png?size=50x50&set=set1', 1);
insert into users (user_id, name, lastName, email, password, photo, type_id) values (14, 'Grethel', 'Dodle', 'gdodled@live.com', 'uvy6a2', 'https://robohash.org/molestiassimiliquedolorum.png?size=50x50&set=set1', 2);
insert into users (user_id, name, lastName, email, password, photo, type_id) values (15, 'Costa', 'Loines', 'cloinese@newyorker.com', 'MR8nE9eXh', 'https://robohash.org/ipsumutsuscipit.png?size=50x50&set=set1', 3);
insert into users (user_id, name, lastName, email, password, photo, type_id) values (16, 'Cullan', 'Huddlestone', 'chuddlestonef@va.gov', 'NRmFYQeui', 'https://robohash.org/autadipisciest.png?size=50x50&set=set1', 2);
insert into users (user_id, name, lastName, email, password, photo, type_id) values (17, 'Nikita', 'Zimmermanns', 'nzimmermannsg@ebay.co.uk', 'hsztHCUoXfJ', 'https://robohash.org/eosquaeratmagni.png?size=50x50&set=set1', 1);
insert into users (user_id, name, lastName, email, password, photo, type_id) values (18, 'Whitman', 'Glave', 'wglaveh@google.cn', 'ZnccNKOEnC1E', 'https://robohash.org/suscipitsitculpa.png?size=50x50&set=set1', 3);
insert into users (user_id, name, lastName, email, password, photo, type_id) values (19, 'Matt', 'Crallan', 'mcrallani@noaa.gov', 'YRMqF5uWEa', 'https://robohash.org/ipsaavelit.png?size=50x50&set=set1', 3);
insert into users (user_id, name, lastName, email, password, photo, type_id) values (20, 'Riannon', 'Vasyunkin', 'rvasyunkinj@yandex.ru', 'GhNyTtI67ye', 'https://robohash.org/doloreutvoluptatem.png?size=50x50&set=set1', 3);
insert into users (user_id, name, lastName, email, password, photo, type_id) values (21, 'Ciel', 'Mowsdale', 'cmowsdalek@reddit.com', 'fLsCIqq', 'https://robohash.org/suntculpaconsequatur.png?size=50x50&set=set1', 1);
insert into users (user_id, name, lastName, email, password, photo, type_id) values (22, 'Abrahan', 'Pinckstone', 'apinckstonel@webnode.com', 'UuHu6m9j0l', 'https://robohash.org/totamteneturmodi.png?size=50x50&set=set1', 3);
insert into users (user_id, name, lastName, email, password, photo, type_id) values (23, 'Rayna', 'Rosini', 'rrosinim@yellowbook.com', 'G0Nm5WNnH9n', 'https://robohash.org/nonenimaccusantium.png?size=50x50&set=set1', 1);
insert into users (user_id, name, lastName, email, password, photo, type_id) values (24, 'Barnie', 'Cruxton', 'bcruxtonn@who.int', '8bzR4j', 'https://robohash.org/exercitationemmolestiaevero.png?size=50x50&set=set1', 3);
insert into users (user_id, name, lastName, email, password, photo, type_id) values (25, 'Orland', 'Scott', 'oscotto@sfgate.com', 'PbcF4tX', 'https://robohash.org/harumdeseruntaut.png?size=50x50&set=set1', 2);
insert into users (user_id, name, lastName, email, password, photo, type_id) values (26, 'Sterne', 'Roskruge', 'sroskrugep@bluehost.com', '8u7fpcnkJ', 'https://robohash.org/aututnihil.png?size=50x50&set=set1', 2);
insert into users (user_id, name, lastName, email, password, photo, type_id) values (27, 'Edna', 'Joubert', 'ejoubertq@github.io', 'li0wpay', 'https://robohash.org/rerumplaceatreprehenderit.png?size=50x50&set=set1', 1);
insert into users (user_id, name, lastName, email, password, photo, type_id) values (28, 'Sallie', 'Dinzey', 'sdinzeyr@cbc.ca', 'ZRWdp1glgk', 'https://robohash.org/ipsamveroquos.png?size=50x50&set=set1', 2);
insert into users (user_id, name, lastName, email, password, photo, type_id) values (29, 'Sebastiano', 'Wortley', 'swortleys@usatoday.com', '2sP877Jg9u6', 'https://robohash.org/minusfugiatcum.png?size=50x50&set=set1', 1);
insert into users (user_id, name, lastName, email, password, photo, type_id) values (30, 'Garrard', 'Suter', 'gsutert@toplist.cz', 'iGcEMH', 'https://robohash.org/omnismolestiaeunde.png?size=50x50&set=set1', 3);


DROP TABLE IF EXISTS `favorites`;
create table favorites (
	id INT,
	user_id INT,
	product_id INT,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`user_id`) REFERENCES users(user_id),
    FOREIGN KEY (`product_id`) REFERENCES products(product_id)
);
insert into favorites (id, user_id, product_id) values (1, 26, 11);
insert into favorites (id, user_id, product_id) values (2, 7, 31);
insert into favorites (id, user_id, product_id) values (3, 27, 28);
insert into favorites (id, user_id, product_id) values (4, 1, 27);
insert into favorites (id, user_id, product_id) values (5, 29, 27);
insert into favorites (id, user_id, product_id) values (6, 20, 3);
insert into favorites (id, user_id, product_id) values (7, 8, 8);
insert into favorites (id, user_id, product_id) values (8, 22, 47);
insert into favorites (id, user_id, product_id) values (9, 1, 14);
insert into favorites (id, user_id, product_id) values (10, 30, 21);
insert into favorites (id, user_id, product_id) values (11, 21, 41);
insert into favorites (id, user_id, product_id) values (12, 7, 7);
insert into favorites (id, user_id, product_id) values (13, 4, 38);
insert into favorites (id, user_id, product_id) values (14, 19, 48);
insert into favorites (id, user_id, product_id) values (15, 14, 10);
insert into favorites (id, user_id, product_id) values (16, 21, 16);
insert into favorites (id, user_id, product_id) values (17, 1, 30);
insert into favorites (id, user_id, product_id) values (18, 5, 46);
insert into favorites (id, user_id, product_id) values (19, 5, 22);
insert into favorites (id, user_id, product_id) values (20, 9, 47);
insert into favorites (id, user_id, product_id) values (21, 15, 38);
insert into favorites (id, user_id, product_id) values (22, 20, 48);
insert into favorites (id, user_id, product_id) values (23, 28, 24);
insert into favorites (id, user_id, product_id) values (24, 10, 36);
insert into favorites (id, user_id, product_id) values (25, 11, 7);
insert into favorites (id, user_id, product_id) values (26, 3, 28);
insert into favorites (id, user_id, product_id) values (27, 8, 9);
insert into favorites (id, user_id, product_id) values (28, 2, 7);
insert into favorites (id, user_id, product_id) values (29, 5, 45);
insert into favorites (id, user_id, product_id) values (30, 9, 18);
insert into favorites (id, user_id, product_id) values (31, 6, 34);
insert into favorites (id, user_id, product_id) values (32, 5, 16);
insert into favorites (id, user_id, product_id) values (33, 28, 38);
insert into favorites (id, user_id, product_id) values (34, 7, 25);
insert into favorites (id, user_id, product_id) values (35, 3, 7);
insert into favorites (id, user_id, product_id) values (36, 28, 39);
insert into favorites (id, user_id, product_id) values (37, 26, 27);
insert into favorites (id, user_id, product_id) values (38, 10, 46);
insert into favorites (id, user_id, product_id) values (39, 15, 26);
insert into favorites (id, user_id, product_id) values (40, 14, 38);
insert into favorites (id, user_id, product_id) values (41, 17, 5);
insert into favorites (id, user_id, product_id) values (42, 25, 9);
insert into favorites (id, user_id, product_id) values (43, 14, 7);
insert into favorites (id, user_id, product_id) values (44, 27, 32);
insert into favorites (id, user_id, product_id) values (45, 8, 8);
insert into favorites (id, user_id, product_id) values (46, 25, 15);
insert into favorites (id, user_id, product_id) values (47, 21, 12);
insert into favorites (id, user_id, product_id) values (48, 17, 21);
insert into favorites (id, user_id, product_id) values (49, 16, 14);
insert into favorites (id, user_id, product_id) values (50, 12, 18);
insert into favorites (id, user_id, product_id) values (51, 13, 18);
insert into favorites (id, user_id, product_id) values (52, 4, 7);
insert into favorites (id, user_id, product_id) values (53, 14, 6);
insert into favorites (id, user_id, product_id) values (54, 20, 18);
insert into favorites (id, user_id, product_id) values (55, 1, 19);
insert into favorites (id, user_id, product_id) values (56, 8, 48);
insert into favorites (id, user_id, product_id) values (57, 15, 34);
insert into favorites (id, user_id, product_id) values (58, 4, 35);
insert into favorites (id, user_id, product_id) values (59, 3, 24);
insert into favorites (id, user_id, product_id) values (60, 19, 23);
insert into favorites (id, user_id, product_id) values (61, 1, 17);
insert into favorites (id, user_id, product_id) values (62, 23, 13);
insert into favorites (id, user_id, product_id) values (63, 16, 38);
insert into favorites (id, user_id, product_id) values (64, 30, 13);
insert into favorites (id, user_id, product_id) values (65, 14, 1);
insert into favorites (id, user_id, product_id) values (66, 23, 32);
insert into favorites (id, user_id, product_id) values (67, 26, 49);
insert into favorites (id, user_id, product_id) values (68, 17, 49);
insert into favorites (id, user_id, product_id) values (69, 6, 26);
insert into favorites (id, user_id, product_id) values (70, 1, 21);
insert into favorites (id, user_id, product_id) values (71, 18, 11);
insert into favorites (id, user_id, product_id) values (72, 8, 40);
insert into favorites (id, user_id, product_id) values (73, 27, 37);
insert into favorites (id, user_id, product_id) values (74, 30, 41);
insert into favorites (id, user_id, product_id) values (75, 25, 42);
insert into favorites (id, user_id, product_id) values (76, 29, 8);
insert into favorites (id, user_id, product_id) values (77, 20, 23);
insert into favorites (id, user_id, product_id) values (78, 29, 47);
insert into favorites (id, user_id, product_id) values (79, 22, 15);
insert into favorites (id, user_id, product_id) values (80, 27, 6);
insert into favorites (id, user_id, product_id) values (81, 20, 37);
insert into favorites (id, user_id, product_id) values (82, 26, 20);
insert into favorites (id, user_id, product_id) values (83, 1, 38);
insert into favorites (id, user_id, product_id) values (84, 1, 41);
insert into favorites (id, user_id, product_id) values (85, 5, 29);
insert into favorites (id, user_id, product_id) values (86, 10, 17);
insert into favorites (id, user_id, product_id) values (87, 10, 44);
insert into favorites (id, user_id, product_id) values (88, 23, 8);
insert into favorites (id, user_id, product_id) values (89, 5, 11);
insert into favorites (id, user_id, product_id) values (90, 30, 10);

SET SQL_SAFE_UPDATES=0;
UPDATE products SET image="favorito1.png"
WHERE image like 'http://dummyimage.com%'