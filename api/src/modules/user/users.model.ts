import globalHelper from "../../helpers/global.helper"

const userModel = {

    fetchUsers: async () => {
        await globalHelper.fakePromise();
        //throw new Error('ass'); 
    },
}

export default userModel