.. _relationship_types:

Relationship Types
==================

.. note:: **Relationship types are optional and experimental, they currently do not provide relevant functionality to your projects**

Custom content types may have relationships to each other or other content types.
For instance, a person may have an image, or an employee may have a boss, or belong
to a department. These relationships must be defined with a specific *relationship type*, then used
in the custom content with an input type ``ContentSelector``.  The relationship type definition
is an XML file.  It must be placed in the folder, ``site/relationship-types/[name]`` and
be named ``[name].xml``.  Here is an example of a relationship-type:

.. literalinclude:: code/relationship-type.xml
   :language: xml

from-semantic
    Text to describe the "from" relationship.

to-semantic
    Text to describe the "to" relationship.

allowed-from-types
    Any content type may use this relationship-type.

allowed-to-types
  Wherever this relationship-type is used, only an article may be selected.

The content types have the format ``module-name:content-type-name``.
The module may be ``system`` for built-in types.

.. TIP::

  A relationship type may optionally have its own specific icon. The icon can be assigned to the relationship type by adding a PNG file with
  the same name, in the relationship type folder, i.e. ``site/relationship-types/[name]/[name].png``


System relationship types
-------------------------

There are two default relationship types that may be used out of the box.  These represent
general relationship types that may be reused often.

``system:reference``
  No content type restriction, from-semantic = "relates to", to-semantic = "related of".

``system:parent``
  No content type restriction, from-semantic = "parent of", to-semantic = "child of".
