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

    if (!response.ok) {
        console.log(response);
        console.log("Data: ", data);
    } else {
        console.log("SUCCESS!");
    }
};

export const getMessageAPI = async (idInstance: string, apiTokenInstance: string) => {
    return await fetch(`https://api.green-api.com/waInstance${idInstance}/receiveNotification/${apiTokenInstance}`)
        .then((response) => {
            return response.json();
        }).then(async (data) => {
            console.log('receiptId:', data.receiptId);
            if (data.receiptId === null) {
                console.log('NULL')
            } else {
                await fetch(`https://api.green-api.com/waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${data.receiptId}`, {
                    method: "DELETE"
                }).then(response2 => {
                    if (response2.ok) {
                        console.log("DELETED");
                    } else {
                        console.log('ERROR: ', response2.json());
                    }
                });
            }
        });
};
