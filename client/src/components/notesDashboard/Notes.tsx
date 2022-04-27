import React, { useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { Divider, Item, Icon } from "semantic-ui-react";

export const Notes = () => {
    useEffect(() => {
        axios.get('http://localhost:8080/api/notes')
        .then((response: AxiosResponse) => {
            let data = JSON.parse(JSON.stringify(response.data))
            console.log(data);
        })
        .catch((e) => {
            console.log(e);
        });
    });

    const sample = [
        {
            "id": 30,
            "createdAt": "2022-04-12T17:11:30.648Z",
            "user": "Fritz Simonis",
            "note": "Exercitationem suscipit sed et et totam eos explicabo voluptatem minima iste facere ad non qui dolore impedit fugiat omnis debitis qui non nostrum debitis quis dicta autem rem ut asperiores."
        },
        {
            "id": 29,
            "createdAt": "2022-04-05T16:15:00.722Z",
            "user": "Gwendolyn Zulauf",
            "note": "Expedita quia quia adipisci unde eum velit ut ipsa cupiditate aut vel adipisci voluptatem fuga voluptatem quisquam autem est aut ex aperiam et amet quae accusamus nihil optio laborum in."
        },
        {
            "id": 28,
            "createdAt": "2022-03-31T01:54:39.095Z",
            "user": "Fritz Simonis",
            "note": "Et tenetur et sed architecto doloremque ut ad a dolores ab sed assumenda voluptate molestiae est sapiente maiores culpa repellendus autem beatae consequatur qui architecto quidem officiis nostrum aut dignissimos."
        }
      ];

    return( 
        <div>
            <h2 className="ui header">
                <Divider hidden/>
                <i className="book icon"></i>
                <div className="content">
                    Your notes:
                </div>
            </h2>

            <Item.Group divided>
                {sample.map((sample) => (
                    <Item>
                    <Icon size="large" name="sticky note" />
                    <Item.Content key={sample.id}>
                        <Item.Header> Created at: {sample.createdAt}</Item.Header>
                        <Item.Meta><span>Created by: {sample.user}</span></Item.Meta>
                        <Item.Description>{sample.note}</Item.Description>
                    </Item.Content>
                </Item>
                ))}
            </Item.Group>
        </div>
    )
}