import {Component} from 'react'
import {
  MainContainer,
  TextEditorContainer,
  ImgDiv,
  Heading,
  Img,
  TextInput,
  Header,
  Ul,
  Li,
  Button,
  Line,
  TextArea,
} from './styledComponents'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

class TextEditor extends Component {
  state = {
    activeBold: false,
    activeItalic: false,
    activeUnderline: false,
  }
  onClickBold = () => {
    this.setState(prve => ({
      activeBold: !prve.activeBold,
    }))
  }
  onClickItalic = () => {
    this.setState(prve => ({
      activeItalic: !prve.activeItalic,
    }))
  }
  onClickUnderline = () => {
    this.setState(prve => ({
      activeUnderline: !prve.activeUnderline,
    }))
  }

  render() {
    const {activeBold, activeItalic, activeUnderline} = this.state
    return (
      <MainContainer>
        <TextEditorContainer>
          <ImgDiv>
            <Heading>Text Editor</Heading>
            <Img
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </ImgDiv>
          <TextInput>
            <Header>
              <Ul>
               <Li>
                <Button
                  data-testid="bold"
                  onClick={this.onClickBold}
                  active={activeBold}
                >
                  <VscBold size={25} />
                </Button>
              </Li>
              <Li>
                <Button
                  data-testid="italic"
                  onClick={this.onClickItalic}
                  active={activeItalic}
                >
                  <GoItalic size={25} />
                </Button>
              </Li>
              <Li>
                <Button
                  data-testid="underline"
                  onClick={this.onClickUnderline}
                  active={activeUnderline}
                >
                  <AiOutlineUnderline size={25} />
                </Button>
              </Li>
              </Ul>
              <TextArea
                activeBold={activeBold}
                activeItalic={activeItalic}
                activeUnderline={activeUnderline}
              ></TextArea>
            </Header>
          </TextInput>
        </TextEditorContainer>
      </MainContainer>
    )
  }
}

export default TextEditor
