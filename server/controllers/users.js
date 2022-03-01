const bcrypt = require("bcryptjs");
const db = require("../models");

const index = (req, res) => {
	db.User.find().exec((err, allUsers) => {
		if (err)
			return res.status(400).json({
				message: "Utter Failure!",
				error: err,
			});
		return res.status(200).json({
			message: "Success!",
			data: allUsers,
		});
	});
};

const show = async (req, res) => {
	// db.User.findById(req.params.id, (err, foundUser) => {
	// 	if (err)
	// 		return res.status(400).json({
	// 			message: "Utter Failure!",
	// 			error: err,
	// 		});
	// 	return res.status(200).json({
	// 		message: "Success!",
	// 		data: foundUser,
	// 	});
	// });

	try {
        const foundUser = await db.User.findById(req.params.id)
        return res.status(200).json({
            message: "Success",
            data: foundUser
        })
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: "Internal Server Error"
        })


};
}

const create = async (req, res) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt)

	const user = new db.User(req.body)
	user.password = hash
	const createdUser = await user.save();

	try {
		return res.status(201).json({
			message: "Success",
			data: createdUser
		})
	} catch(err) {
		return res.status(400).json({
			message: "failure",
			error: err,
		})
	}
	// db.User.create(
    //     {
    //         username: req.body.username,
    //         firstName: req.body.firstName,
    //         lastName: req.body.lastName,
    //         password: hash,
	// 		avatar: req.file.path
    //     }, (err, savedUser) => {
	// 	if (err)
	// 		return res.status(400).json({
	// 			message: "Utter Failure!",
	// 			error: err,
	// 		});
	// 	return res.status(201).json({
	// 		message: "Success",
	// 		data: savedUser,
	// 	});
	// });
};

const update = (req, res) => {
	db.User.findByIdAndUpdate(
		req.params.id,
		req.body,
		{ new: true },
		(err, updatedUser) => {
			if (err)
				return res.status(400).json({
					message: "Utter Failure!",
					error: err,
				});
			return res.status(202).json({
				message: "Success",
				data: updatedUser,
			});
		}
	);
};

const destroy = (req, res) => {
	db.User.findByIdAndDelete(req.params.id, (err, deletedUser) => {
		if (err)
			return res.status(400).json({
				message: "Utter Failure!",
				error: err,
			});
		return res.status(200).json({
			message: "Success!",
			data: deletedUser,
		});
	});
};

module.exports = {
	index,
	show,
	create,
	update,
	destroy,
};

