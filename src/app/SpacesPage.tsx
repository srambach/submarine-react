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
  Toolbar,
  ToolbarGroup,
  ToolbarItem,
  Breadcrumb,
  Split,
  SplitItem
} from '@patternfly/react-core';
// make sure you've installed @patternfly/patternfly
// import accessibleStyles from '@patternfly/patternfly/utilities/Accessibility/accessibility.css';
// import spacingStyles from '@patternfly/patternfly/utilities/Spacing/spacing.css';
import { css } from '@patternfly/react-styles';
import { BellIcon, CogIcon } from '@patternfly/react-icons';
// import brandImg from './l_pf-reverse-164x11.png';
import avatarImg from './img/catavatar.png';

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
      activeItem: 0
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
      <DropdownItem>Link</DropdownItem>,
      <DropdownItem>Action</DropdownItem>,
      <DropdownItem isDisabled>Disabled Link</DropdownItem>,
      <DropdownItem isDisabled>
        Disabled Action
      </DropdownItem>,
      <DropdownSeparator />,
      <DropdownItem>Separated Link</DropdownItem>,
      <DropdownItem>Separated Action</DropdownItem>
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
        showNavToggle
        // isNavOpen={false} 
      />
    );
    const Sidebar = <PageSidebar nav={PageNav} 
    isNavOpen={false} 
    />;

    return (
      <React.Fragment>
        <BackgroundImage src={bgImages} />
        <Page header={Header} sidebar={Sidebar} 
        // isManagedSidebar={false}
        isManagedSidebar
        >
          <PageSection variant={PageSectionVariants.light}>

            <Breadcrumb>
              <BreadcrumbItem to="#">Section Home</BreadcrumbItem>
              <BreadcrumbItem to="#">Section Title</BreadcrumbItem>
              <BreadcrumbItem to="#">Section Title</BreadcrumbItem>
              <BreadcrumbItem to="#" isActive>
                  Section Landing
              </BreadcrumbItem>
            </Breadcrumb>
            <Split>
              <SplitItem isMain>
                  <TextContent>
                    <Text component="h1">Spaces</Text>
                  </TextContent>          
              </SplitItem>
              <SplitItem isMain={false}>
                  <Button>Add Space</Button>         
              </SplitItem>
            </Split>
          </PageSection>
          <PageSection>
            <Gallery gutter="md">
              {Array.apply(0, Array(10)).map((x, i) => (
                <GalleryItem key={i}>
                  <Card>
                    <CardBody>
                      <Split>
                        <SplitItem isMain>
                          MySpace
                        </SplitItem>
                        <SplitItem isMain={false}>
                          <Badge>1</Badge>
                        </SplitItem>
                      </Split>
                    </CardBody>
                  </Card>
                </GalleryItem>
              ))}
            </Gallery>
          </PageSection>
        </Page>
      </React.Fragment>
    );
  }
}

export default PageLayoutDefaultNav;