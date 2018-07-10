-- Host: localhost:3306
-- Generation Time: Dec 14, 2017 at 03:07 PM
-- Server version: 5.5.42
-- PHP Version: 7.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `widgets`
--

-- --------------------------------------------------------

--
-- Table structure for table `carts`
--

CREATE TABLE `carts` (
  `id` int(11) NOT NULL,
  `quantity` tinytext NOT NULL,
  `type_id_fk` varchar(55) NOT NULL,
  `color_id_fk` varchar(255) NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `deliver_by` varchar(255) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `email` varchar(255) NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=37 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `carts`
--

INSERT INTO `carts` (`id`, `quantity`, `type_id_fk`, `color_id_fk`, `created`, `deliver_by`, `status`, `email`) VALUES
(6, '11', '3', '3', '2017-12-14 01:49:44', '2017-12-20', 1, 'jim@jim.com'),
(7, '121', '2', '2', '2017-12-14 03:19:16', '2017-12-20', 1, 'jim@jim.com'),
(12, '22', '2', '1', '2017-12-14 04:43:51', '2017-12-20', 1, 'larry@larry.com'),
(13, '12', '2', '2', '2017-12-14 04:48:49', '2017-12-30', 1, 'lisa@lisa.com'),
(14, '345', '3', '2', '2017-12-14 04:56:58', '2018-01-18', 1, 'mary@mary.com'),
(15, '1000', '3', '1', '2017-12-14 04:58:43', '2017-12-20', 1, 'carlos@carlos.com'),
(16, '30', '1', '1', '2017-12-14 05:02:40', '2017-12-21', 1, 'derek@derek.com'),
(17, '100', '2', '2', '2017-12-14 05:03:58', '2017-12-21', 1, 'marty@marty.com'),
(18, '1', '1', '2', '2017-12-14 05:14:34', '2017-12-21', 1, 'johnson@johnson.com'),
(19, '111', '1', '1', '2017-12-14 05:15:42', '2017-12-21', 1, 'marcus@marcus.com'),
(20, '1', '1', '2', '2017-12-14 05:20:37', '2017-12-21', 1, 'heidi@heidi.com'),
(21, '1', '1', '3', '2017-12-14 05:23:30', '2017-12-21', 1, 'barney@barney.com'),
(22, '1', '3', '1', '2017-12-14 05:25:22', '2017-12-21', 1, 'clarissa@clarissa.com'),
(23, '1', '2', '1', '2017-12-14 05:38:08', '2017-12-21', 1, 'miley@miley.com'),
(24, '1', '3', '1', '2017-12-14 05:40:54', '2017-12-21', 1, 'warren@warren.com'),
(25, '1000', '1', '2', '2017-12-14 05:44:04', '2017-12-21', 1, 'fernando@fernando.com'),
(26, '9', '2', '2', '2017-12-14 05:46:40', '2017-12-21', 1, 'mario@mario.com'),
(27, '1', '2', '1', '2017-12-14 05:54:23', '2017-12-21', 1, 'willy@willy.com'),
(28, '1', '3', '2', '2017-12-14 05:55:03', '2017-12-21', 1, 'johnny@johnny.com'),
(29, '100', '3', '2', '2017-12-14 05:56:08', '2017-12-21', 1, 'charlie@charlie.com'),
(30, '1', '1', '3', '2017-12-14 05:59:46', '2017-12-21', 1, 'boo@boo.com'),
(31, '1000', '2', '3', '2017-12-14 06:04:04', '2017-12-21', 1, 'radley@radley.com'),
(32, '1', '1', '2', '2017-12-14 06:06:37', '2017-12-21', 1, 'noonan@noonan.com'),
(33, '1', '1', '2', '2017-12-14 06:09:40', '2017-12-21', 1, 'margeret@margeret.com'),
(34, '1', '1', '2', '2017-12-14 06:13:20', '2017-12-21', 1, 'constance@constance.com'),
(35, '1', '3', '1', '2017-12-14 06:18:08', '2017-12-21', 1, 'maurice@maurice.com'),
(36, '1', '1', '2', '2017-12-14 06:24:05', '2017-12-21', 1, 'nerlens@erlans');

-- --------------------------------------------------------

--
-- Table structure for table `color`
--

CREATE TABLE `color` (
  `id` int(11) NOT NULL DEFAULT '0',
  `color` varchar(55) NOT NULL DEFAULT ''
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `color`
--

INSERT INTO `color` (`id`, `color`) VALUES
(3, 'Yellow'),
(2, 'Blue'),
(1, 'Red');

-- --------------------------------------------------------

--
-- Table structure for table `status`
--

CREATE TABLE `status` (
  `id` int(2) NOT NULL,
  `status` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `status`
--

INSERT INTO `status` (`id`, `status`) VALUES
(4, 'Delivered'),
(3, 'Built'),
(2, 'Production'),
(1, 'Ordered');

-- --------------------------------------------------------

--
-- Table structure for table `widget_type`
--

CREATE TABLE `widget_type` (
  `id` int(5) NOT NULL,
  `type` varchar(50) NOT NULL,
  `description` varchar(255) NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `widget_type`
--

INSERT INTO `widget_type` (`id`, `type`, `description`) VALUES
(1, 'Widget', 'Standard Widget'),
(2, 'Widget Pro', 'Professional Level Widget'),
(3, 'Widget Xtreme', 'Top Of The Line');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `color`
--
ALTER TABLE `color`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `widget_type`
--
ALTER TABLE `widget_type`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `carts`
--
ALTER TABLE `carts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=37;
--
-- AUTO_INCREMENT for table `widget_type`
--
ALTER TABLE `widget_type`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;