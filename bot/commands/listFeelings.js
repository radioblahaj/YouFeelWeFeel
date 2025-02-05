async function listFeelings(args) {
    const { payload, client } = args;
    const { user_id, text, channel_id } = payload;

    const userInfo = await client.users.info({ user: user_id });
    const isAdmin = userInfo.user.is_admin;
    const commands = text.split(" ");

    const feeling = commands[0];
    const feeling2 = commands[1];
    const note = commands[2];
    const share = commands[3];


    const friendsList = [
        "U06QST7V0J2", // Eesha
        "U07L45W79E1", // Neon
        "U060YRK2734", // Saran
        "U07SX29CECA", // Froppi
        "U015MCCBXBP", // Cara
        "U056J6JURFF", // Sofia
        "U05PYFCJXV0", // River
        "U06JLP2R8JV", // Firepup
        "U07PYPAF5RR", // Neko
        "U07958J0JJU", // Suya
        "U07BU2HS17Z", // Felix
        "U073Q4F60LQ", // Johnathon
        "U06MCHA590E", // Ari
        "U04FATFRE6T", // Sean
        "U06NHEFDE4S", // Jovie
        "U07346379NY", // Kess
        "U01581HFAGZ", // Alex Park
        "U059VC0UDEU", // Skyfall
    ]

    // // const userProfile = await client.users.profile.get({ user: userToBan });
    // const profilePhoto = userProfile.profile.image_512;
    // const displayName = userProfile.profile.display_name;


    const errors = []
    if(!feeling) errors.push("A feeling is required.")
    if(!feeling2) errors.push("A feeling is required.")
    if(!isAdmin) errors.push("You are not authorized to use this command.")
    if(!note) errors.push("A note is required.")
    if(!share) errors.push("A share is required.")
    

    if (errors.length > 0)
                return await client.chat.postEphemeral({  user: `${user_id}`, text: errors.join("\n") });
        
    
    try {
        if (user_id in friendsList) {
            console.log("User is in friends list")
        } else {
            console.log("User is not in friends list")
        }
        // await client.chat.postMessage({
        //     channel: channel_id,
        //     text: `${feeling} ${feeling2} ${note} ${share}`
        // });
            } catch (e) {
                console.log(e)
            }

        // await client.chat.postEphemeral({
        //     channel: channel_id,
        //     user: user_id,
        //     text: `<@${userToBan}> has been banned from all channels for ${reason}`,
        //     mrkdwn: true
        // });
   

}

module.exports = listFeelings;
