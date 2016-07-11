import React, { Component } from "react";
import domClasses from "utils/dom/classes.js";
import _ from "lodash";

const connectStyles = (DecoratedComponent, classesMap) => {
  const props = {};
  const componentsMap = {};
  const modifiersMap = {};
  let block;

  _.forOwn(classesMap, (destClassName, origClassName) => {
    const match = origClassName.match(/^(\w+)(?:-(\w+))?(?:--(\w+))?/);

    if (match) {
      let [, cBlock, cElement, cModifier] = match;

      if (block && block !== cBlock) {
        throw new Error(
          `Block name \`${block}\` doesn\'t match \`${cBlock}\`. ` +
            `You can only define a single block component per set of styles.`
        );
      }
      block = cBlock;

      if (!cElement) {
        cElement = cBlock;
      }

      if (cModifier) {
        if (!modifiersMap[cElement]) {
          modifiersMap[cElement] = {};
        }
        modifiersMap[cElement][cModifier] = destClassName;
      }
      else {
        componentsMap[cElement] = destClassName;
      }
    }
  });

  _.forOwn(componentsMap, (componentClassName, componentName) => {
    props[componentName] = (modifiersSelection) => {
      let className = componentClassName;

      if (modifiersSelection) {
        _.forOwn(modifiersSelection, (isActive, modifierName) => {
          const modifierClassName = modifiersMap[componentName][modifierName];

          if (isActive) {
            className = domClasses.set(className, modifierClassName);
          }
        });
      }

      return className;
    };
  });

  class StyleSheetWrapper extends React.Component {
    render() {
      return <DecoratedComponent {...this.props} classes={props} />
    }
  }

  const displayName = DecoratedComponent.displayName ||
    DecoratedComponent.name ||
    "Component";

  StyleSheetWrapper.displayName = `BEM(${displayName})`;

  return StyleSheetWrapper;
};

export { connectStyles };
