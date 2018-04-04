/*
    create by : NamVH
*/
import express from 'express';
const routes = express.Router();

const member = routes.route('/member');

member.get( (req, res, next) => {
    // lấy các thông số đầu vào
    // do something
    const textQuery = 'SELECT * FROM member';
    // tạo connect và get data trong database. 
    req.getConnection(function (err, conn) {
        // check điều kiện
        if (err) return next("Không thể kết nối !");

        const query = conn.query(textQuery, function (err, rows) {
            if (err) {
                console.log(err);
                return next("Mysql error, check your query");
            }
            // xử lý dữ liệu trước khi trả về.
            const getMemberIds = (rows) => {
                let data = rows;
                let memberIds = [];
                let members;
                data.map((item) => {
                    memberIds.push(item.id);
                    const objectItem = {
                        [item.id]: {
                            href: item.href + '/' + item.id,
                            data: {
                                id: item.id,
                                name: item.name,
                                avatar: item.avatar,
                                phone: item.phone,
                                address: item.address,
                                pictureId: item.pictureId,
                                level: item.level,
                                totalApply: item.totalApply,
                                yearBirth: item.yearBirth,
                            }
                        }
                    };
                    members = Object.assign({}, members, objectItem);
                });
                return {
                    members,
                    memberIds
                };
            }

            const dataMembers = getMemberIds(rows);

            const temp = {
                APP_ID: "member",
                version: 1.0,
                page: 0,
                pageSize: 0,
                memberIds: dataMembers.memberIds,
                members: dataMembers.members,
                total: rows.length
            };
            res.send(temp);

        });
    });
});

export default routes;
