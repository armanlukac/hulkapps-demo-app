import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Post from 'App/Models/Post'

export default class PostSeeder extends BaseSeeder {
  public async run () {

    await Post.createMany([      
      {
        title: 'First post',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut convallis lorem ut mollis condimentum. Vestibulum quis imperdiet ligula, a pharetra quam. Maecenas nulla nunc, fringilla ut placerat non, sodales in libero. Donec metus dui, faucibus vitae finibus id, fringilla eu sapien. Curabitur euismod efficitur mattis. Nunc ullamcorper, est imperdiet malesuada laoreet, nisi ligula pellentesque ante, eu faucibus odio nunc vitae est. Nulla porta, tellus et eleifend hendrerit, neque ipsum rhoncus libero, eget pellentesque neque nulla id est. Ut varius, nisi vitae pretium iaculis, nulla ipsum imperdiet odio, vitae egestas dui turpis tempor elit.',
        author: 1        
      },
      {
        title: 'Second post',
        description: 'Mauris vehicula, est quis lacinia bibendum, lacus sem scelerisque metus, in lacinia diam risus quis est. Curabitur lobortis sapien enim, ut congue massa ullamcorper non. Nullam condimentum turpis vitae leo cursus sagittis. Nullam at libero faucibus felis aliquam pulvinar sed in ante. Morbi nisl sapien, rutrum in sapien sed, suscipit pellentesque lacus. Curabitur porttitor purus vel quam tincidunt, quis dictum augue fringilla. Proin leo odio, pulvinar vel tristique non, rutrum fringilla nunc.',
        author: 2       
      },
      {
        title: 'Third post',
        description: 'Sed ut bibendum sapien. Vestibulum pellentesque lacinia auctor. Nunc nisl justo, dictum et sem et, elementum aliquet tortor. Integer scelerisque dictum ullamcorper. Nam nunc ex, posuere ut interdum at, sagittis eget neque. Quisque pulvinar vestibulum nisi non placerat. Fusce blandit egestas libero, sodales rutrum metus dignissim id. Fusce in iaculis ante, at suscipit metus. Curabitur id justo eget massa molestie venenatis. Fusce varius suscipit ullamcorper. Quisque vulputate, velit a volutpat viverra, felis ex egestas lorem, ac convallis mauris sem in tellus. Vivamus sed volutpat ex.',
        author: 1       
      },
      {
        title: 'Fourth post',
        description: 'Curabitur vel nibh sapien. Pellentesque eu dolor eget magna finibus laoreet quis ut urna. Phasellus lacinia dui massa, id tincidunt metus lobortis vel. Nam ac malesuada turpis. Praesent porttitor porttitor bibendum. In congue blandit rhoncus. Ut vitae mauris eget dolor faucibus mattis. Pellentesque porta eleifend elementum. Etiam nec urna a orci mollis gravida a vel magna. Nam fermentum vel dui aliquet ullamcorper. Praesent in sagittis felis. Etiam auctor velit sit amet ultrices vestibulum. Aliquam ullamcorper ultrices venenatis. Ut quis tincidunt sapien.',
        author: 2       
      }      
    ])
  }

  }
}
