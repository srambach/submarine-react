import React from 'react';
import {
  Avatar,
  BackgroundImage,
  BackgroundImageSrc,
  Badge,
  Brand,
  BreadcrumbItem,
  Button,
  ButtonVariant,
  Card,
  CardBody,
  CardHeader,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownSeparator,
  Gallery,
  GalleryItem,
  KebabToggle,
  Nav,
  NavItem,
  NavList,
  Page,
  PageHeader,
  PageSection,
  PageSectionVariants,
  PageSidebar,
  TextContent,
  Text,
  TextInput,
  Title,
  Toolbar,
  ToolbarGroup,
  ToolbarItem,
  Breadcrumb,
  Split,
  SplitItem,
  CardFooter
} from '@patternfly/react-core';
// make sure you've installed @patternfly/patternfly
// import accessibleStyles from '@patternfly/patternfly/utilities/Accessibility/accessibility.css';
// import spacingStyles from '@patternfly/patternfly/utilities/Spacing/spacing.css';
import { css } from '@patternfly/react-styles';
import { BellIcon, CogIcon, FileImageIcon } from '@patternfly/react-icons';
// import brandImg from './l_pf-reverse-164x11.png';
import avatarImg from './img/catavatar.png';
import { DataList, DataListItem, DataListCell } from '@patternfly/react-core';

class PageLayoutDefaultNav extends React.Component {
  public state = {
    isDropdownOpen: false,
    isKebabDropdownOpen: false,
    activeItem: 0
  };

  public constructor(props) {
    super(props);
    this.state = {
      isDropdownOpen: false,
      isKebabDropdownOpen: false,
      activeItem: 0,
    };
  }

  private onDropdownToggle = isDropdownOpen => {
    this.setState({
      isDropdownOpen
    });
  };

  private onDropdownSelect = (event) => {
    this.setState({
      isDropdownOpen: !this.state.isDropdownOpen
    });
  };

  private onKebabDropdownToggle = isKebabDropdownOpen => {
    this.setState({
      isKebabDropdownOpen
    });
  };

  private onKebabDropdownSelect = event => {
    this.setState({
      isKebabDropdownOpen: !this.state.isKebabDropdownOpen
    });
  };

  private onNavSelect = result => {
    this.setState({
      activeItem: result.itemId
    });
  };

  // public handleTextInputChange = value => {
  //   this.setState({ searchValue: value });
  // };

  public render() {
    const { isDropdownOpen, isKebabDropdownOpen, activeItem } = this.state;

    const PageNav = (
      <Nav onSelect={this.onNavSelect} aria-label="Nav">
        <NavList>
          <NavItem to="#nav-link1" itemId={0} isActive={activeItem === 0}>
            System Panel
          </NavItem>
          <NavItem to="#nav-link2" itemId={1} isActive={activeItem === 1}>
            Policy
          </NavItem>
          <NavItem to="#nav-link3" itemId={2} isActive={activeItem === 2}>
            Authentication
          </NavItem>
          <NavItem to="#nav-link4" itemId={3} isActive={activeItem === 3}>
            Network Services
          </NavItem>
          <NavItem to="#nav-link5" itemId={4} isActive={activeItem === 4}>
            Server
          </NavItem>
        </NavList>
      </Nav>
    );
    const kebabDropdownItems = [
      <DropdownItem>
        <BellIcon /> Notifications
      </DropdownItem>,
      <DropdownItem>
        <CogIcon /> Settings
      </DropdownItem>
    ];
    const userDropdownItems = [
      <DropdownItem>Logout</DropdownItem>
    ];
    const PageToolbar = (
      <Toolbar>
        {/* <ToolbarGroup>
          <ToolbarItem>
            <Button id="default-example-uid-01" aria-label="Notifications actions" variant={ButtonVariant.plain}>
              <BellIcon />
            </Button>
          </ToolbarItem>
          <ToolbarItem>
            <Button id="default-example-uid-02" aria-label="Settings actions" variant={ButtonVariant.plain}>
              <CogIcon />
            </Button>
          </ToolbarItem>
        </ToolbarGroup> */}
        <ToolbarGroup>
          {/* <ToolbarItem>
            <Dropdown
              isPlain
              position="right"
              onSelect={this.onKebabDropdownSelect}
              toggle={<KebabToggle onToggle={this.onKebabDropdownToggle} />}
              isOpen={isKebabDropdownOpen}
              dropdownItems={kebabDropdownItems}
            />
          </ToolbarItem> */}
          <ToolbarItem>
            <Dropdown
              isPlain
              position="right"
              onSelect={this.onDropdownSelect}
              isOpen={isDropdownOpen}
              toggle={<DropdownToggle onToggle={this.onDropdownToggle}>Joe Practitioner</DropdownToggle>}
              dropdownItems={userDropdownItems}
            />
          </ToolbarItem>
        </ToolbarGroup>
      </Toolbar>
    );
    const bgImages = {
      [BackgroundImageSrc.lg]: '/assets/images/pfbg_1200.jpg',
      [BackgroundImageSrc.sm]: '/assets/images/pfbg_768.jpg',
      [BackgroundImageSrc.sm2x]: '/assets/images/pfbg_768@2x.jpg',
      [BackgroundImageSrc.xs]: '/assets/images/pfbg_576.jpg',
      [BackgroundImageSrc.xs2x]: '/assets/images/pfbg_576@2x.jpg',
      [BackgroundImageSrc.filter]: '/assets/images/background-filter.svg#image_overlay'
    };

    const Header = (
      <PageHeader
        logo={"Kogito"}
        toolbar={PageToolbar}
        avatar={<Avatar src={avatarImg} alt="Avatar image" />}
        // showNavToggle
        // isNavOpen={false} 
      />
    );
    const Sidebar = <PageSidebar nav={PageNav} 
    isNavOpen={false} 
    />;

    return (
      <React.Fragment>
        <BackgroundImage src={bgImages} />
        <Page header={Header} 
        // sidebar={Sidebar} 
        // isManagedSidebar={false}
        // isManagedSidebar
        >
          <PageSection variant={PageSectionVariants.light}>

            <Breadcrumb>
              <BreadcrumbItem to="/">Spaces</BreadcrumbItem>
              <BreadcrumbItem to="/spaceview">
                  MySpace
              </BreadcrumbItem>
              <BreadcrumbItem to="#" isActive>
                  MyProject
              </BreadcrumbItem>
            </Breadcrumb>
            <Split>
              <SplitItem isMain>
                <Title headingLevel="h1" size="3xl">MyProject</Title>
              </SplitItem>
              <SplitItem isMain={false}>
                <Toolbar>
                  <ToolbarGroup>
                    <ToolbarItem> {/*className={css(spacingStyles.mxMd)}*/}
                      <Button variant="tertiary">Delete Project</Button>
                    </ToolbarItem>
                  </ToolbarGroup>
                </Toolbar>

         
              </SplitItem>
            </Split>
          </PageSection>
          <PageSection>
<Toolbar>
  <ToolbarGroup>
    <ToolbarItem>
      <Button variant="primary">Add File</Button>
    </ToolbarItem>
  </ToolbarGroup>
</Toolbar>
            <DataList aria-label="List of project files">
              <DataListItem aria-labelledby="simple-item1" isExpanded={false}>
                <DataListCell width={1}>
                  <FileImageIcon size="md" />
                </DataListCell>
                <DataListCell width={4}>
                  <span id="simple-item1">myBusinessDecision</span>
                </DataListCell>
                <DataListCell width={2}>DMN</DataListCell>
                <DataListCell width={4}>Last modified 1 week ago</DataListCell>
                <DataListCell width={4}>Created 3 weeks ago</DataListCell>
              </DataListItem>

              <DataListItem aria-labelledby="simple-item2" isExpanded={false}>
                <DataListCell width={1}>
                  <FileImageIcon size="md"/>
                </DataListCell>
                <DataListCell width={4}>
                  <span id="simple-item2">myBusinessDecision</span>
                </DataListCell>
                <DataListCell width={2}>DMN</DataListCell>
                <DataListCell width={4}>Last modified 1 week ago</DataListCell>
                <DataListCell width={4}>Created 3 weeks ago</DataListCell>
              </DataListItem>

              <DataListItem aria-labelledby="simple-item3" isExpanded={false}>
                <DataListCell width={1}>
                  <FileImageIcon size="md"/>
                </DataListCell>
                <DataListCell width={4}>
                  <span id="simple-item3">myBusinessDecision</span>
                </DataListCell>
                <DataListCell width={2}>DMN</DataListCell>
                <DataListCell width={4}>Last modified 1 week ago</DataListCell>
                <DataListCell width={4}>Created 3 weeks ago</DataListCell>
              </DataListItem>

            </DataList>

          </PageSection>
        </Page>
      </React.Fragment>
    );
  }
}

export default PageLayoutDefaultNav;