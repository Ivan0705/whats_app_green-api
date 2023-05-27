export const sendMessageAPI = async (idInstance: string, apiTokenInstance: string, chatId: string, message: string) => {
    const data = {
        chatId: chatId,
        message: message
    };

    let response = await fetch(`https://api.green-api.com/waInstance${idInstance}/sendMessage/${apiTokenInstance}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
    );
    const res = response.json();

    if (!response.ok) {
        console.log(response);
        console.log("Data: ", data);
    } else {
        console.log("SUCCESS!");
        console.log(res);
    }
    return res;
};

export const getMessageAPI = async (idInstance: string, apiTokenInstance: string, receiptId: number) => {
    let response1 = await fetch(`https://api.green-api.com/waInstance${idInstance}/receiveNotification/${apiTokenInstance}`);
    if (response1.ok) {
        // @ts-ignore
        console.log("GET: ", response1.json());

        if (receiptId === 0) {
            console.log('EMPTY')
        } else {
            let response2 = await fetch(`https://api.green-api.com/waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${receiptId}`, {
                method: "DELETE"
            });
            if (response2.ok) {
                console.log("DELETED");
            } else {
                console.log('ERROR: ', response2.json());
            }
        }
    } else {
        console.log("ERROR")
    }

    return response1;
};
