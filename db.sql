-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 10, 2021 at 05:40 PM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 7.4.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `employeemanagementsystem`
--

-- --------------------------------------------------------

--
-- Table structure for table `address`
--

CREATE TABLE `address` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `street_name` varchar(225) NOT NULL,
  `unit` varchar(225) NOT NULL,
  `city` varchar(225) NOT NULL,
  `province` varchar(225) NOT NULL,
  `zipcode` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `address`
--

INSERT INTO `address` (`id`, `user_id`, `street_name`, `unit`, `city`, `province`, `zipcode`) VALUES
(1, 1, '310 Dundas Street', '908', 'London', 'Ontario', 'N6B2R6'),
(3, 5, ' Third Street', '577', 'London', 'Ontario', 'N5W1H4'),
(4, 2, '495 Queen Street', '1811', 'London', 'Ontario', 'N8Q9P0'),
(10, 31, '700 King Street', '1211', 'London', 'Ontario', 'N5W0A6');

-- --------------------------------------------------------

--
-- Table structure for table `availability`
--

CREATE TABLE `availability` (
  `Id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `monday` varchar(225) NOT NULL,
  `tuesday` varchar(225) NOT NULL,
  `wednesday` varchar(225) NOT NULL,
  `thursday` varchar(225) NOT NULL,
  `friday` varchar(225) NOT NULL,
  `saturday` varchar(225) NOT NULL,
  `sunday` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `availability`
--

INSERT INTO `availability` (`Id`, `user_id`, `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`, `sunday`) VALUES
(1, 1, '06AM to 04PM', '07AM to 05PM', '08AM to 06PM', '09AM to 07PM', '10AM to 08PM', '11AM to 09PM', '11PM to 09AM'),
(2, 2, '12AM to 12AM', '12AM to 12AM', '12AM to 12AM', '02PM to 01PM', '07PM to 03AM', '01AM to 01PM', '03PM to 04PM'),
(3, 5, '06AM to 04PM', '07AM to 05PM', '08AM to 06PM', '09AM to 07PM', '10AM to 08PM', '11AM to 09PM', '12AM to 10PM'),
(5, 31, '12AM to 12AM', '12AM to 12AM', '12AM to 12AM', '12AM to 12AM', '12AM to 12AM', '12AM to 12AM', '12AM to 12AM');

-- --------------------------------------------------------

--
-- Table structure for table `bank`
--

CREATE TABLE `bank` (
  `id` int(11) NOT NULL,
  `bank_name` varchar(100) NOT NULL,
  `typeofaccount` varchar(50) NOT NULL,
  `transit_number` varchar(100) NOT NULL,
  `institude_number` varchar(100) NOT NULL,
  `account_no` varchar(100) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bank`
--

INSERT INTO `bank` (`id`, `bank_name`, `typeofaccount`, `transit_number`, `institude_number`, `account_no`, `user_id`) VALUES
(1, 'Bank', 'Savings', '0200022223', '0300033330033', '40390209211', 1),
(2, 'Bank', 'Savings', '0200022222', '0300033330033', '40390209211', 5),
(3, 'Bankin', 'Chequing', '020000000', '000000000', '000000000', 2);

-- --------------------------------------------------------

--
-- Table structure for table `complains`
--

CREATE TABLE `complains` (
  `id` int(11) NOT NULL,
  `complain_for` varchar(100) NOT NULL,
  `complain` varchar(225) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `complains`
--

INSERT INTO `complains` (`id`, `complain_for`, `complain`, `user_id`) VALUES
(1, 'Admin', 'Complain', 1),
(2, 'HR', 'ComplainHR', 1);

-- --------------------------------------------------------

--
-- Table structure for table `discounts`
--

CREATE TABLE `discounts` (
  `id` int(11) NOT NULL,
  `promo_code` varchar(50) NOT NULL,
  `discount` varchar(50) NOT NULL,
  `type` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `discounts`
--

INSERT INTO `discounts` (`id`, `promo_code`, `discount`, `type`) VALUES
(1, '333-4444-55', '10%', 'Company'),
(2, '333-3535-55', '25%', 'External');

-- --------------------------------------------------------

--
-- Table structure for table `hiring`
--

CREATE TABLE `hiring` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `job_id` int(11) NOT NULL,
  `status` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `hiring`
--

INSERT INTO `hiring` (`id`, `user_id`, `job_id`, `status`) VALUES
(1, 1, 1, 'Approved'),
(2, 1, 1, 'Rejected'),
(3, 1, 2, 'Approved'),
(4, 1, 2, 'Approved'),
(5, 1, 2, 'Approved'),
(6, 1, 1, 'Rejected'),
(7, 1, 1, 'Undecided');

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` int(11) NOT NULL,
  `job_title` varchar(100) NOT NULL,
  `job_desc` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `jobs`
--

INSERT INTO `jobs` (`id`, `job_title`, `job_desc`) VALUES
(1, 'Job', 'Job desc'),
(2, 'Web Developer', 'We need a developer for web designing and ux '),
(3, 'Jr. Web Developer', 'Need a junior web developer');

-- --------------------------------------------------------

--
-- Table structure for table `leaveapplication`
--

CREATE TABLE `leaveapplication` (
  `id` int(11) NOT NULL,
  `dateofleave_from` date NOT NULL,
  `dateofleave_to` date NOT NULL,
  `reasonforleave` varchar(500) NOT NULL,
  `approved` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `leaveapplication`
--

INSERT INTO `leaveapplication` (`id`, `dateofleave_from`, `dateofleave_to`, `reasonforleave`, `approved`, `user_id`) VALUES
(1, '2021-05-29', '2021-05-31', 'Sick', 1, 1),
(2, '2021-07-31', '2021-08-03', 'Sick', -1, 1),
(3, '2021-06-20', '2021-06-22', 'Sick', 1, 1),
(4, '2021-06-21', '2021-06-24', 'Sick', -1, 2),
(5, '2021-07-02', '2021-07-10', 'Sick', 1, 2),
(6, '2021-07-10', '2021-07-31', 'Sick', 1, 2),
(7, '2021-06-25', '2021-06-29', 'Sick', -1, 1),
(8, '2021-06-25', '2021-06-29', 'sick', 1, 1),
(9, '2021-06-25', '2021-06-30', 'sick', 1, 2),
(10, '2021-07-09', '2021-07-23', 'sick', 1, 1),
(11, '2021-07-21', '2021-07-29', 'sick', 1, 1),
(12, '2021-08-04', '2021-09-05', 'Sickness', 1, 2),
(13, '2021-08-05', '2021-08-13', 'Leaving town', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `message`
--

CREATE TABLE `message` (
  `id` int(11) NOT NULL,
  `message` varchar(100) NOT NULL,
  `user_id` int(11) NOT NULL,
  `message_from` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `message`
--

INSERT INTO `message` (`id`, `message`, `user_id`, `message_from`) VALUES
(9, 'Hey Josh , meet me tomorrow at 10 am at office ', 31, 'Admin'),
(10, 'meet me tomorrow ', 1, 'Admin'),
(11, 'Meet tomorow at 9 am', 1, 'HR');

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `message` varchar(225) NOT NULL,
  `message_from` int(11) NOT NULL,
  `message_for` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`id`, `message`, `message_from`, `message_for`) VALUES
(1, 'Message for hr', 5, 'HR'),
(2, 'Message for Employee', 5, 'Employee'),
(6, 'meet me tomorrow', 5, 'HR');

-- --------------------------------------------------------

--
-- Table structure for table `notifications`
--

CREATE TABLE `notifications` (
  `id` int(11) NOT NULL,
  `notification` varchar(225) NOT NULL,
  `user_id` int(11) NOT NULL,
  `status` varchar(50) NOT NULL,
  `notification_type` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `notifications`
--

INSERT INTO `notifications` (`id`, `notification`, `user_id`, `status`, `notification_type`) VALUES
(2, 'Your leave request has been accepted', 1, 'Old', 'Good'),
(3, 'Your leave request has been rejected', 2, 'Old', 'Bad'),
(4, 'Your leave request has been accepted', 2, 'Old', 'Good'),
(5, 'Your leave request has been accepted', 1, 'Old', 'Good'),
(6, 'Your leave request from 2021-07-21 to 2021-07-29 has been accepted', 1, 'Old', 'Good'),
(7, 'Your leave request from 2021-06-25 to 2021-06-29 has been rejected', 1, 'Old', 'Bad'),
(8, 'Your application for the position of Web Developer has been accepted', 1, 'Old', 'Good'),
(9, 'Your application for the position of Job has been rejected', 1, 'Old', 'Bad'),
(10, 'Your leave request from 2021-07-21 to 2021-07-29 has been accepted', 1, 'Old', 'Good'),
(11, 'Your leave request from 2021-06-25 to 2021-06-30 has been accepted', 2, 'Old', 'Good'),
(12, 'Your leave request from 2021-08-05 to 2021-08-13 has been accepted', 1, 'Old', 'Good'),
(13, 'Your leave request from 2021-08-04 to 2021-09-05 has been accepted', 2, 'Old', 'Good'),
(20, 'You have new message', 1, 'Old', 'Good'),
(21, 'You have new message', 1, 'Old', 'Good'),
(22, 'Task \"hire  more people\" was assigned to you.Open your active targets to view the details\"', 2, 'Old', 'Good'),
(23, 'You have new message', 1, 'Old', 'Good'),
(24, 'Task \"sales need up by 10%\" was assigned to you.Open your active targets to view the details\"', 1, 'Old', 'Good'),
(25, 'You have new message', 1, 'Old', 'Good'),
(26, 'Task \"sales up\" was assigned to you.Open your active targets to view the details\"', 1, 'Old', 'Good'),
(27, 'Task \"hire more staff\" was assigned to you.Open your active targets to view the details\"', 2, 'Old', 'Good');

-- --------------------------------------------------------

--
-- Table structure for table `paycheck`
--

CREATE TABLE `paycheck` (
  `id` int(11) NOT NULL,
  `request_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `paycheck`
--

INSERT INTO `paycheck` (`id`, `request_id`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `positions`
--

CREATE TABLE `positions` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `position` varchar(225) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `positions`
--

INSERT INTO `positions` (`id`, `user_id`, `position`) VALUES
(7, 2, 'HR');

-- --------------------------------------------------------

--
-- Table structure for table `presence`
--

CREATE TABLE `presence` (
  `Id` int(11) NOT NULL,
  `clock_in` datetime NOT NULL,
  `clock_out` datetime DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `approved` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `presence`
--

INSERT INTO `presence` (`Id`, `clock_in`, `clock_out`, `user_id`, `approved`) VALUES
(18, '2021-05-27 05:31:16', '2021-05-27 06:31:20', 1, 1),
(19, '2021-05-27 06:52:11', '2021-05-27 07:52:16', 1, 1),
(23, '2021-06-21 11:41:58', '2021-06-21 12:42:02', 2, 0),
(24, '2021-06-22 01:30:27', '2021-06-22 01:30:31', 1, 0),
(25, '2021-06-22 01:36:03', '2021-06-22 01:36:11', 1, 1),
(26, '2021-06-22 01:39:39', '2021-06-22 01:39:45', 2, 0),
(27, '2021-07-02 10:00:04', '2021-07-02 10:00:12', 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `target`
--

CREATE TABLE `target` (
  `id` int(11) NOT NULL,
  `target_desc` varchar(225) NOT NULL,
  `assigned_id` int(11) NOT NULL,
  `assigneddate` date NOT NULL,
  `active` varchar(10) NOT NULL DEFAULT 'InActive',
  `completed` varchar(100) NOT NULL,
  `completiondate` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `target`
--

INSERT INTO `target` (`id`, `target_desc`, `assigned_id`, `assigneddate`, `active`, `completed`, `completiondate`) VALUES
(1, 'Task', 1, '2021-08-04', 'Active', 'Complete', '2021-08-04'),
(4, 'Task', 2, '2021-08-04', 'Active', 'Complete', '2021-08-04'),
(17, 'hire  more people', 2, '2021-08-06', 'Active', 'Complete', '2021-08-06'),
(18, 'sales need up by 10%', 1, '2021-08-06', 'Active', 'Complete', '2021-08-06'),
(19, 'sales up', 31, '2021-08-06', 'Active', 'Complete', '2021-08-06'),
(20, 'hire more staff', 2, '2021-08-06', 'InActive', 'InComplete', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `Id` int(11) NOT NULL,
  `username` varchar(225) NOT NULL,
  `password` varchar(225) NOT NULL,
  `phone_no` varchar(50) NOT NULL,
  `email` varchar(225) NOT NULL,
  `availability` varchar(100) NOT NULL,
  `typeofuser` varchar(50) NOT NULL,
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `dateofbirth` date NOT NULL,
  `typeofid` varchar(50) NOT NULL,
  `idnumber` varchar(225) NOT NULL,
  `worktype` varchar(50) NOT NULL,
  `hourlywage` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`Id`, `username`, `password`, `phone_no`, `email`, `availability`, `typeofuser`, `firstname`, `lastname`, `dateofbirth`, `typeofid`, `idnumber`, `worktype`, `hourlywage`) VALUES
(1, 'Employee2', 'employee2', '0900884123', 'Employee2@gmail.com', 'Available', 'Employee', 'Alex', 'Doe', '1989-08-21', 'Passport Number', '02333000022222', 'Full', 30),
(2, 'HR', 'HR1234', '090088432', 'HR@gmail.com', 'Offline', 'HR', 'Dhir', 'Patel', '1980-06-02', 'Passport Number', '22222333333', 'Full', 20),
(5, 'Admin', 'Admin1234', '0900884123', 'Admin@gmail.com', 'Available', 'Admin', 'Ryan', 'George', '1999-03-24', 'Passport Number', '213123814341', 'Full', 8500),
(31, 'Josh', 'Josh', '2269993646', 'Josh@gmail.com', 'Available', 'Employee', 'Josh', 'Dubois', '1976-12-11', 'Passport Number', '083121232332', 'Full', 12);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `address`
--
ALTER TABLE `address`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `availability`
--
ALTER TABLE `availability`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `bank`
--
ALTER TABLE `bank`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `complains`
--
ALTER TABLE `complains`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `discounts`
--
ALTER TABLE `discounts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `hiring`
--
ALTER TABLE `hiring`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `leaveapplication`
--
ALTER TABLE `leaveapplication`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `paycheck`
--
ALTER TABLE `paycheck`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `positions`
--
ALTER TABLE `positions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `presence`
--
ALTER TABLE `presence`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `target`
--
ALTER TABLE `target`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `address`
--
ALTER TABLE `address`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `availability`
--
ALTER TABLE `availability`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `bank`
--
ALTER TABLE `bank`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `complains`
--
ALTER TABLE `complains`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `discounts`
--
ALTER TABLE `discounts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `hiring`
--
ALTER TABLE `hiring`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `leaveapplication`
--
ALTER TABLE `leaveapplication`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `message`
--
ALTER TABLE `message`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `notifications`
--
ALTER TABLE `notifications`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `paycheck`
--
ALTER TABLE `paycheck`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `positions`
--
ALTER TABLE `positions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `presence`
--
ALTER TABLE `presence`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `target`
--
ALTER TABLE `target`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
