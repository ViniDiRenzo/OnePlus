import React from "react";
import Gallery from "../components/Gallery";
import Banner from "../components/Banner";
import image from "../assets/images/project-two/image-5.webp";

function Projects() {
  return (
    <>
      <Banner
        pageName="Projects"
        imageUrl={image}
        objectPosition="object-center"
      />

      <div className="block">
        <h2 className="heading">Heading</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          ipsum voluptas, praesentium omnis error amet vero cupiditate dicta
          officiis eaque neque, veniam sunt illum consequuntur corporis
          voluptatibus modi vel nulla voluptatem sequi quo cumque magnam! Culpa
          voluptates tenetur sunt sequi rem animi provident ad soluta eaque
          laboriosam possimus, magni quibusdam qui, praesentium aliquid officia
          deleniti quis asperiores quaerat doloribus? Maxime nesciunt soluta
          fugit, voluptates ipsa ut animi nisi quos quis saepe debitis
          voluptatibus accusamus velit omnis. Perferendis earum eos minima
          excepturi blanditiis voluptas accusamus sed id qui est maxime ipsa,
          nobis pariatur quam suscipit voluptates enim voluptatem natus
          quibusdam sequi esse praesentium quaerat. Quia adipisci optio dolorem
          modi amet facilis laudantium aliquid quidem iusto repudiandae pariatur
          ipsum temporibus ab quam vel, quo voluptates deserunt mollitia fugit
          harum et qui. Qui autem reprehenderit fuga quae, totam aspernatur ad
          nostrum molestiae, aut dignissimos at modi? Incidunt iste labore saepe
          natus impedit est dolores ratione molestiae illum nobis magnam iure
          atque nesciunt quos, dignissimos nisi expedita hic similique quidem
          quas nostrum ab molestias autem harum. Sequi non eum ad eos. Ipsam
          dolores, culpa, doloribus beatae, similique atque quo officia ab vel
          tempora aliquam quaerat necessitatibus nostrum maiores vitae
          architecto eum et fuga iste.
        </p>
      </div>
      <div className="block">
        <h2 className="heading">Another Heading</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ad
          fugit provident perspiciatis doloribus iste expedita sapiente
          reiciendis voluptatem, saepe non quos aperiam qui sint fuga? Veritatis
          facilis ratione repellendus itaque, inventore vero architecto animi,
          quod eos rerum adipisci reiciendis numquam corporis beatae quas
          dolorem illum magni quo, atque aut.
        </p>
      </div>
      <div className="block">
        <h2 className="heading">Yet Another Heading</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae corrupti
          repudiandae perspiciatis vero delectus, quam ipsum eos et velit eum,
          officia veniam sequi hic asperiores dolores obcaecati blanditiis in,
          rem exercitationem nesciunt accusantium aliquam perferendis tempore.
          Quasi nemo itaque a non hic voluptate dolores debitis quis voluptates
          doloribus animi mollitia fuga ducimus qui, aspernatur ratione autem
          earum, nostrum deleniti assumenda tempora, illo eos architecto!
          Temporibus architecto suscipit, nulla quia sunt beatae labore autem,
          ab maxime atque quas expedita, magni culpa nihil assumenda molestiae
          facilis ex ratione adipisci! Similique, explicabo aperiam magnam
          voluptate quis at. Nobis fugit voluptates maiores fugiat dignissimos.
        </p>
      </div>
      <Gallery />
    </>
  );
}

export default Projects;
