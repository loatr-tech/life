import React from 'react';
import { Button } from 'antd';
import Editor from 'rich-markdown-editor';
import './post-main.scss';
import PostComments from './post-comments';

const exampleText = `
haha
# H1
## H2
### H3
# 讲道理就是写着玩的\n\n我是认真说的
Dave wasn't exactly sure how he had ended up in this predicament. He ran
through all the events that had lead to this current situation and it
still didn't make sense. He wanted to spend some time to try and make
sense of it all, but he had higher priorities at the moment. The first
was how to get out of his current situation of being naked in a tree
with snow falling all around and no way for him to get down.

Dave wasn't exactly sure how he had ended up in this predicament. He ran
through all the events that had lead to this current situation and it
still didn't make sense. He wanted to spend some time to try and make
sense of it all, but he had higher priorities at the moment. The first
was how to get out of his current situation of being naked in a tree
with snow falling all around and no way for him to get down.

Dave wasn't exactly sure how he had ended up in this predicament. He ran
through all the events that had lead to this current situation and it
still didn't make sense. He wanted to spend some time to try and make
sense of it all, but he had higher priorities at the moment. The first
was how to get out of his current situation of being naked in a tree
with snow falling all around and no way for him to get down.
`;

function PostMain() {
  return (
    <div className="post-main">
      {/* Header */}
      <header className="post-main__title">
        <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
      </header>
      {/* Content */}
      <main className="post-main__content">
        <Editor defaultValue={exampleText} readOnly={true} />
      </main>
      <p className="post-main_copyright-disclaimer">著作权归作者所有，未经授权禁止转载</p>
      {/* Interactions */}
      <section className="post-main__interactions">
        <Button type="primary" shape="circle">
          A
        </Button>
        <Button type="primary" shape="circle">
          B
        </Button>
        <Button type="primary" shape="circle">
          C
        </Button>
        <Button type="primary" shape="circle">
          D
        </Button>
      </section>
      <PostComments />
    </div>
  );
}

export default PostMain;
