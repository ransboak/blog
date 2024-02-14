import React from "react";
import PostAuthor from "../components/PostAuthor";
import { Link } from "react-router-dom";
import thumbnail from "../assets/blog79.jpg";

const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail__container">
        <div className="post-detail__container">
          <div className="post-detail__header">
            <PostAuthor />
            <div className="post-detail__buttons">
              <Link to={`post/gdhd/edit`} className="btn sm primary">
                edit
              </Link>
              <Link to={`post/gdhd/delete`} className="btn sm danger">
                delete
              </Link>
            </div>
          </div>
          <h1>This is the post title!</h1>
          <div className="post-detail__thumbnail">
            <img src={thumbnail} alt="" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
            repellat optio tempora sequi! Recusandae fuga excepturi iste ut
            commodi dolorum error harum natus iusto, in nihil molestias minus
            voluptatibus totam odit doloribus possimus, numquam adipisci minima.
            Quas voluptatibus minus fugit.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus ad
            rerum assumenda incidunt, asperiores consectetur, animi corrupti
            laboriosam exercitationem veritatis molestias labore temporibus et
            sed accusantium, fugiat deleniti debitis consequatur. Fugiat eum
            iusto, cum rerum voluptatibus iste atque a nesciunt quod mollitia,
            doloremque, numquam odio sunt. Quas obcaecati illum optio ratione
            exercitationem aliquam nobis animi!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
            quasi, incidunt fugit nostrum perferendis necessitatibus, veniam sed
            dicta sapiente recusandae totam, atque magnam aut ratione cum
            consequuntur repellat possimus nulla illum et iste! Quaerat impedit
            eius suscipit corporis excepturi adipisci? Delectus debitis aliquid,
            iste, mollitia, voluptates odit animi libero esse provident
            distinctio fugit. Optio eos dolores necessitatibus ut expedita
            tempore esse unde accusamus explicabo itaque ad, similique eveniet
            voluptate repudiandae ex nemo qui quae quos voluptates asperiores
            repellendus distinctio aut deserunt dicta! Nihil illum animi cumque
            consequuntur facere nulla excepturi fugiat laboriosam odit
            asperiores magni ipsum, ab consectetur quam doloribus quos
            necessitatibus eligendi reprehenderit rerum obcaecati saepe non ipsa
            qui? Quaerat.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
            ducimus animi aliquam atque asperiores voluptatem vel. Error
            repellendus assumenda necessitatibus?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum vel
            quis rem, ab soluta nisi nulla molestias corporis. Similique
            accusamus dolore eveniet error iusto, repudiandae qui delectus
            cumque ratione, nulla tempora! Ex ea corrupti dolorum sequi,
            pariatur laborum nihil illum ullam, aperiam omnis vero maiores nam
            culpa! Ex modi id ipsum veniam expedita dignissimos nobis odit
            tempore dolores esse sequi culpa tempora obcaecati consectetur
            totam, animi reprehenderit laboriosam saepe at fuga molestiae?
            Fugiat illo provident unde aliquid quasi ullam ratione ducimus, nemo
            molestias quo veniam consequuntur, sed corporis ex sapiente quisquam
            est maxime suscipit voluptas harum. Tempore neque dolorem rerum odit
            fuga, id, repellendus perferendis possimus voluptates nam incidunt
            consequatur minus saepe atque earum dolore deleniti corrupti
            repellat. Neque nam, aut vel aperiam pariatur qui eveniet tempore,
            enim consectetur quas et repudiandae adipisci consequuntur impedit
            consequatur dolor temporibus iste rerum inventore velit laboriosam
            error, ut autem? Optio animi saepe distinctio aliquam, vel est
            delectus quas aperiam reiciendis obcaecati illo odit veritatis
            dolorum sapiente maxime nobis iure praesentium voluptatem, natus
            consectetur ea ex. Nobis debitis ab doloribus aliquid eius minima,
            quidem quibusdam iste error vitae sit nihil quis, saepe cupiditate
            aperiam voluptate dolorum, repellat accusantium. Molestias
            voluptatum natus laborum nemo quas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PostDetail;
